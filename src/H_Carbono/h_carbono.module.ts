import { Module } from '@nestjs/common';
import { HCarbonoController } from './h_carbono.controller';
import { HCarbonoService } from './h_carbono.service';

@Module({
  controllers: [HCarbonoController],
  providers: [HCarbonoService]
})
export class HCarbonoModule {}
