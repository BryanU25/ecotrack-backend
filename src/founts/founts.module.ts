import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FountsService } from './founts.service';
import { FountsController } from './founts.controller';
import { Fount } from 'src/entities/dim-founts.entity'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

@Module({
  imports: [TypeOrmModule.forFeature([Fount])],
  providers: [FountsService],
  controllers: [FountsController],
})
export class FountsModule {}

