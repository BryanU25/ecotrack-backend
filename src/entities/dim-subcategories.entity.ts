import { Exclude } from 'class-transformer';
import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    Unique,
    JoinColumn,
} from 'typeorm';

import { Fount } from './dim-founts.entity';
import { Category } from './dim-categories.entity';

@Entity('dim_subcategories')
@Unique('dim_subcategories_name_key', ['name'])
export class SubCategory {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'dim_subcategories_pkey' })
  id: number;

  @Column({ length: 100 })
  name: string;

  @ManyToOne(() => Category, category => category.subcategories)
  @JoinColumn({ 
    name: 'id_category', 
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'dim_subcategories_id_category_fkey', })
  category: Category;

  @OneToMany(() => Fount, fount => fount.subcategory, { cascade: true })
  founts: Fount[];

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  constructor(partial: Partial<SubCategory>) {
    Object.assign(this, partial);
  }
}