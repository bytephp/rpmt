import { Module } from '@nestjs/common';
import { TenantAppService } from './tenant-app.service';
import { TenantAppController } from './tenant-app.controller';

@Module({
  controllers: [TenantAppController],
  providers: [TenantAppService],
})
export class TenantAppModule {}
