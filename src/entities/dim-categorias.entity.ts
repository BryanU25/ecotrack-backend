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
  import { Subcategoria } from './dim-subcategorias.entity';

@Entity('dim_categorias')
@Unique('categorias_nombre_key', ['nombre'])
export class Categoria {
    @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'dim_categorias_pkey' })
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @OneToMany(() => Subcategoria, subcategoria => subcategoria.categoria)
    subcategorias: Subcategoria[];

    @Exclude()
    @CreateDateColumn()
    created_at: Date;
  
    @Exclude()
    @UpdateDateColumn()
    updated_at: Date;
  
    constructor(partial: Partial<Categoria>) {
      Object.assign(this, partial);
    }
}