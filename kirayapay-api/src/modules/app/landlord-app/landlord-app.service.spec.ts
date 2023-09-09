import { Test, TestingModule } from '@nestjs/testing';
import { LandlordAppService } from './landlord-app.service';

describe('LandlordAppService', () => {
  let service: LandlordAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandlordAppService],
    }).compile();

    service = module.get<LandlordAppService>(LandlordAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
