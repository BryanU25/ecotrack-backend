import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('dim_rol')
export class DimRol {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'dim_rol_pkey' })
  id: number;

  @Column({ length: 100 })
  rol: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(partial: Partial<DimRol>) {
    Object.assign(this, partial);
  }
}
