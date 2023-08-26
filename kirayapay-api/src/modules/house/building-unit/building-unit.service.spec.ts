import { Test, TestingModule } from '@nestjs/testing';
import { BuildingUnitService } from './building-unit.service';

describe('BuildingUnitService', () => {
  let service: BuildingUnitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingUnitService],
    }).compile();

    service = module.get<BuildingUnitService>(BuildingUnitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
