import { Exclude } from 'class-transformer';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    Unique, 
    JoinColumn,
} from 'typeorm';

import { SubCategory } from './dim-subcategories.entity';

@Entity('dim_founts')
@Unique('dim_founts_name_key', ['nombre'])
export class Fount {
  @PrimaryGeneratedColumn( { primaryKeyConstraintName: 'dim_founts_pkey' })
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column('decimal')
  CO2: number;

  @Column('decimal') //Excluir de datos para categorias distintas a Combustibles
  CH4_F: number;

  @Column('decimal') //Excluir de datos para categorias distintas a Combustibles
  N2O_F: number;

  @Column('decimal') //Excluir de datos para categorias distintas a Combustibles
  CH4_M: number;

  @Column('decimal') //Excluir de datos para categorias distintas a Combustibles
  N2O_M: number;

  @ManyToOne(() => SubCategory, subcategory => subcategory.founts)
  @JoinColumn({ 
    name: 'id_subcategory', 
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'dim_founts_id_subcategory_fkey', })
  subcategory: SubCategory;
  

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  constructor(partial: Partial<Fount>) {
    Object.assign(this, partial);
  }
}