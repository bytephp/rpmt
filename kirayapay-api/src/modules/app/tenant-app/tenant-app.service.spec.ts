import { Test, TestingModule } from '@nestjs/testing';
import { TenantAppService } from './tenant-app.service';

describe('TenantAppService', () => {
  let service: TenantAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenantAppService],
    }).compile();

    service = module.get<TenantAppService>(TenantAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
