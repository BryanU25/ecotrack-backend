import { Test, TestingModule } from '@nestjs/testing';
import { HCarbonoController } from './h_carbono.controller';

describe('HCarbonoController', () => {
  let controller: HCarbonoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HCarbonoController],
    }).compile();

    controller = module.get<HCarbonoController>(HCarbonoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
