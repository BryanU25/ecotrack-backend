import { Exclude } from 'class-transformer';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    Unique
} from 'typeorm';
import { Subcategoria } from './dim-subcategorias.entity';

@Entity('compuestos')
@Unique('compuestos_nombre_key', ['nombre'])
export class Compuesto {
    @PrimaryGeneratedColumn( { primaryKeyConstraintName: 'dim_compuestos_pkey' })
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column('decimal')
    CO2: number;
  
    @Column('decimal') 
    CH4_F: number;
  
    @Column('decimal')
    N2O_F: number;

    @Column('decimal') //Excluir de datos para categorias distintas a Combustibles
    CH4_M: number;

    @Column('decimal') //Excluir de datos para categorias distintas a Combustibles
    N2O_M: number;

    @ManyToOne(() => Subcategoria, subcategoria => subcategoria.compuestos)
    subcategoria: Subcategoria;

    @Exclude()
    @CreateDateColumn()
    created_at: Date;
  
    @Exclude()
    @UpdateDateColumn()
    updated_at: Date;
  
    constructor(partial: Partial<Compuesto>) {
      Object.assign(this, partial);
    }
}