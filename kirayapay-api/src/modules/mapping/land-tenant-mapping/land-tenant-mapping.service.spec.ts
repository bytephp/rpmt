import { Test, TestingModule } from '@nestjs/testing';
import { LandTenantMappingService } from './land-tenant-mapping.service';

describe('LandTenantMappingService', () => {
  let service: LandTenantMappingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandTenantMappingService],
    }).compile();

    service = module.get<LandTenantMappingService>(LandTenantMappingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
