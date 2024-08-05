import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

import { SubCategory } from './dim-subcategories.entity';

@Entity('dim_categories')
@Unique('dim_categories_name_key', ['name'])
export class Category {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'dim_categories_pkey' })
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @OneToMany(() => SubCategory, subcategory => subcategory.category, { cascade: true })
    subcategories: SubCategory[];

    @Exclude()
    @CreateDateColumn()
    created_at: Date;
  
    @Exclude()
    @UpdateDateColumn()
    updated_at: Date;

    constructor(partial: Partial<Category>) {
      Object.assign(this, partial);
  }
}
