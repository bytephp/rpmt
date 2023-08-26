import { Test, TestingModule } from '@nestjs/testing';
import { BuildLandMappingController } from './build-land-mapping.controller';
import { BuildLandMappingService } from './build-land-mapping.service';

describe('BuildLandMappingController', () => {
  let controller: BuildLandMappingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildLandMappingController],
      providers: [BuildLandMappingService],
    }).compile();

    controller = module.get<BuildLandMappingController>(BuildLandMappingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
