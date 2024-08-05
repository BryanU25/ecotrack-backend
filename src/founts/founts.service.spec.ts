import { Test, TestingModule } from '@nestjs/testing';
import { FountsService } from './founts.service';

describe('FountsService', () => {
  let service: FountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FountsService],
    }).compile();

    service = module.get<FountsService>(FountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
