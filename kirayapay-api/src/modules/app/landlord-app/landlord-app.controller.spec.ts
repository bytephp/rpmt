import { Test, TestingModule } from '@nestjs/testing';
import { LandlordAppController } from './landlord-app.controller';
import { LandlordAppService } from './landlord-app.service';

describe('LandlordAppController', () => {
  let controller: LandlordAppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LandlordAppController],
      providers: [LandlordAppService],
    }).compile();

    controller = module.get<LandlordAppController>(LandlordAppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
