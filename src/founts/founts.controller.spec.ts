import { Test, TestingModule } from '@nestjs/testing';
import { FountsController } from './founts.controller';

describe('FountsController', () => {
  let controller: FountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FountsController],
    }).compile();

    controller = module.get<FountsController>(FountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
