import { Test, TestingModule } from '@nestjs/testing';
import { BuildingUnitController } from './building-unit.controller';
import { BuildingUnitService } from './building-unit.service';

describe('BuildingUnitController', () => {
  let controller: BuildingUnitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildingUnitController],
      providers: [BuildingUnitService],
    }).compile();

    controller = module.get<BuildingUnitController>(BuildingUnitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
