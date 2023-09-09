import { Test, TestingModule } from '@nestjs/testing';
import { TenantAppController } from './tenant-app.controller';
import { TenantAppService } from './tenant-app.service';

describe('TenantAppController', () => {
  let controller: TenantAppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenantAppController],
      providers: [TenantAppService],
    }).compile();

    controller = module.get<TenantAppController>(TenantAppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
