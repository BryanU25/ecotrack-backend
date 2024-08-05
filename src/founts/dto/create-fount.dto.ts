import { IsNotEmpty, IsString } from 'class-validator';
import { FountVarsDto } from './vars-fount.dto';

export class CreateFountDto extends FountVarsDto {
  @IsNotEmpty()
  @IsString()
  categoria: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;
}
