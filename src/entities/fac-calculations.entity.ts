import { Exclude } from 'class-transformer';
import { 
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
 } from 'typeorm';

import { Category } from './dim-categories.entity';
import { SubCategory } from './dim-subcategories.entity';
import { Fount } from './dim-founts.entity';

@Entity('fac_calculations')
export class FacCalculation {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'fac_calculations_pkey1' })
  id: number;

  @ManyToOne(() => Category)
  category: Category;

  @ManyToOne(() => SubCategory)
  subcategory: SubCategory;

  @ManyToOne(() => Fount)
  fount: Fount;

  @Column('decimal')
  huellaCalculada: number;

  @Column()
  date: Date;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  constructor(partial: Partial<FacCalculation>) {
    Object.assign(this, partial);
  }
}
