// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import * as bcrypt from 'bcrypt';
// import { ConfigService } from '@nestjs/config';
// import { InjectRepository } from '@nestjs/typeorm';
// import { DataSource, Repository } from 'typeorm';
// import { CreateCompoundDto } from './dto/create-fount.dto';


// @Injectable()
// export class FountsService {
//   async createCompound(compound: CreateCompoundDto): Promise<Compound | HttpException> {
//     const { categoria, nombre, co2, ch4Fijo, ch4Movil, no2Fijo, no2Movil } = compound;

//     if (!this.isValidCompound(compound)) {
//       throw new HttpException('Invalid compound data for the given category', HttpStatus.BAD_REQUEST);
//     }

//     const newCompound = this.compoundsRepository.create({
//       categoria,
//       nombre,
//       co2,
//       ch4Fijo,
//       ch4Movil,
//       no2Fijo,
//       no2Movil,
//     });

//     return await this.compoundsRepository.save(newCompound);
//   }

//   private isValidCompound(compound: CreateCompoundDto): boolean {
//     const { categoria, co2, ch4Fijo, ch4Movil, no2Fijo, no2Movil } = compound;

//     if (categoria === 'Combustibles Gaseosos') {
//       return co2 !== undefined && ch4Fijo !== undefined && ch4Movil !== undefined && no2Fijo !== undefined && no2Movil !== undefined;
//     }

//     if (categoria === 'Refrigerantes') {
//       return co2 !== undefined;
//     }

//     if (categoria === 'Combustibles Solidos') {
//       return co2 !== undefined && ch4Fijo !== undefined && no2Fijo !== undefined;
//     }

//     return true;
//   }
// }

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { FountVarsDto } from './dto/vars-fount.dto';
import { CreateFountDto } from './dto/create-fount.dto';
import { UpdateFountDto } from './dto/update-fount.dto';
import { Fount } from 'src/entities/dim-founts.entity'; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FountsService {
  constructor(
    @InjectRepository(Fount)
    private fountsRepository: Repository<Fount>,
  ) {}

  async createFount(createFountDto: CreateFountDto): Promise<Fount | HttpException> {
    const newFount = this.fountsRepository.create(createFountDto);
    return await this.fountsRepository.save(newFount);
  }

  async updateFount(id: number, updateData: UpdateFountDto): Promise<Fount | HttpException> {
    const fount = await this.fountsRepository.findOne({
        where: { id }
      });
    if (!fount) {
      throw new HttpException('Fount not found', HttpStatus.NOT_FOUND);
    }

    // Validar la actualización específica si es necesario
    // if (updateData.categoria && !this.isValidFount(updateData)) {
    //   throw new HttpException('Invalid fount data for the given category', HttpStatus.BAD_REQUEST);
    // }

    Object.assign(fount, updateData);
    return await this.fountsRepository.save(fount);
  }


  //FNCION PARA VALIDACION ADICIONAL (Establece que datos (variables de fuente de emision), dependiendo la categoria establecida. [Falta establecer bien las categorias])
//   private isValidFount(fount: CreateFountDto): boolean {
//     const { categoria, co2, ch4Fijo, ch4Movil, n2oFijo, n2oMovil } = fount;

//     if (categoria === 'Combustibles Gaseosos') {
//       return co2 !== undefined && ch4Fijo !== undefined && ch4Movil !== undefined && n2oFijo !== undefined && n2oMovil !== undefined;
//     }

//     if (categoria === 'Refrigerantes') {
//       return co2 !== undefined;
//     }

//     if (categoria === 'Combustibles Solidos') {
//       return co2 !== undefined && ch4Fijo !== undefined && n2oFijo !== undefined;
//     }

//     return true;
//   }
}

