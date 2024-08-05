import { IsOptional, IsString } from 'class-validator';
import { FountVarsDto } from './vars-fount.dto';

export class UpdateFountDto extends FountVarsDto {
  @IsOptional()
  @IsString()
  categoria?: string;

  @IsOptional()
  @IsString()
  nombre?: string;
}
