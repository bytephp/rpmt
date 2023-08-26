import { Test, TestingModule } from '@nestjs/testing';
import { BuildLandMappingService } from './build-land-mapping.service';

describe('BuildLandMappingService', () => {
  let service: BuildLandMappingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildLandMappingService],
    }).compile();

    service = module.get<BuildLandMappingService>(BuildLandMappingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
