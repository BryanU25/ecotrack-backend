import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categoria } from './dim-categorias.entity';
import { Subcategoria } from './dim-subcategorias.entity';
import { Compuesto } from './dim-compuetos.entity';

@Entity()
export class FacCalculo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Categoria)
  categoria: Categoria;

  @ManyToOne(() => Subcategoria)
  subcategoria: Subcategoria;

  @ManyToOne(() => Compuesto)
  compuesto: Compuesto;

  @Column('decimal')
  huellaCalculada: number;

  @Column()
  fecha: Date;
}
