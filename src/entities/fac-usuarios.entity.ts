import {
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';

import { DimUsuarios } from './dim-usuarios.entity';
import { Exclude } from 'class-transformer';

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

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;
}
