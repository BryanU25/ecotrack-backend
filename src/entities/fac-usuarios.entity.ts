import {
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToOne,
} from 'typeorm';

import { DimUsuarios } from './dim-usuarios.entity';
import { Exclude, Transform } from 'class-transformer';
import { DimRol } from './dim-rol.entity';

@Entity()
export class FacUsuarios {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'fac_usuarios_pkey1' })
  id: number;

  @OneToOne(() => DimUsuarios, { nullable: false, cascade: true })
  @JoinColumn({
    name: 'id_usuario',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fac_usuarios_id_usuario_fkey',
  })
  usuario: DimUsuarios;

  @Transform(({ value }) => ({ id: value.id, rol: value.rol }))
  @ManyToOne(() => DimRol, { nullable: false })
  @JoinColumn({
    name: 'id_rol',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fac_usuarios_id_rol_fkey',
  })
  rol: DimRol;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;
}
