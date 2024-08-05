import { Body, HttpException, Controller, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { FountsService } from './founts.service';
import { CreateFountDto } from './dto/create-fount.dto';
import { UpdateFountDto } from './dto/update-fount.dto';
import { Fount } from 'src/entities/dim-founts.entity'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

@Controller('founts')
export class FountsController {
  constructor(private readonly fountsService: FountsService) {}

  @Post()
  createFount(@Body() createFountDto: CreateFountDto): Promise<Fount | HttpException> {
    return this.fountsService.createFount(createFountDto);
  }

  @Patch(':id')
  updateFount(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFountDto: UpdateFountDto,
  ): Promise<Fount | HttpException> {
    return this.fountsService.updateFount(id, updateFountDto);
  }
}

