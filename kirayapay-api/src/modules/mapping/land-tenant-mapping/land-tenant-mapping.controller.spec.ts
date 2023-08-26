import { Test, TestingModule } from '@nestjs/testing';
import { LandTenantMappingController } from './land-tenant-mapping.controller';
import { LandTenantMappingService } from './land-tenant-mapping.service';

describe('LandTenantMappingController', () => {
  let controller: LandTenantMappingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LandTenantMappingController],
      providers: [LandTenantMappingService],
    }).compile();

    controller = module.get<LandTenantMappingController>(LandTenantMappingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
