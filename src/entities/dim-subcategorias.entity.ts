import { Exclude } from 'class-transformer';
import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    Unique
} from 'typeorm';
import { Categoria } from './dim-categorias.entity';
import { Compuesto } from './dim-compuetos.entity';

@Entity('subcategorias')
@Unique('subcategorias_nombre_key', ['nombre'])
export class Subcategoria {
    @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'dim_subcategorias_pkey' })
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @ManyToOne(() => Categoria, categoria => categoria.subcategorias)
    categoria: Categoria;

    @OneToMany(() => Compuesto, compuesto => compuesto.subcategoria, { cascade: true })
    compuestos: Compuesto[];

    @Exclude()
    @CreateDateColumn()
    created_at: Date;
  
    @Exclude()
    @UpdateDateColumn()
    updated_at: Date;
  
    constructor(partial: Partial<Subcategoria>) {
      Object.assign(this, partial);
    }
}