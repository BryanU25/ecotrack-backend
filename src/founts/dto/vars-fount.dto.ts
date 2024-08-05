import {
    IsNotEmpty,
    IsOptional, 
    IsNumber, 
    ValidateIf,
  } from 'class-validator';
  
  export class FountVarsDto {
    @IsNotEmpty()
    @IsNumber()
    co2: number;
  
    @IsOptional()
    @IsNumber()
    @ValidateIf((o) => o.categoria === 'Combustibles Gaseosos' || o.categoria === 'Combustibles Solidos')
    ch4Fijo?: number;
  
    @IsOptional()
    @IsNumber()
    @ValidateIf((o) => o.categoria === 'Combustibles Gaseosos')
    ch4Movil?: number;
  
    @IsOptional()
    @IsNumber()
    @ValidateIf((o) => o.categoria === 'Combustibles Gaseosos' || o.categoria === 'Combustibles Solidos')
    n2oFijo?: number;
  
    @IsOptional()
    @IsNumber()
    @ValidateIf((o) => o.categoria === 'Combustibles Gaseosos')
    n2oMovil?: number;
  }
  