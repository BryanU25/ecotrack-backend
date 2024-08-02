import { Test, TestingModule } from '@nestjs/testing';
import { HCarbonoService } from './h_carbono.service';

describe('HCarbonoService', () => {
  let service: HCarbonoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HCarbonoService],
    }).compile();

    service = module.get<HCarbonoService>(HCarbonoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
