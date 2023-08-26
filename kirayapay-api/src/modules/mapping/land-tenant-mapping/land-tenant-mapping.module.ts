import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LandTenantMapping } from './entities/land-tenant-mapping.entity';
import { LandTenantMappingService } from './land-tenant-mapping.service';
import { LandTenantMappingController } from './land-tenant-mapping.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LandTenantMapping])],
  exports: [LandTenantMappingService],
  controllers: [LandTenantMappingController],
  providers: [LandTenantMappingService],
})
export class LandTenantMappingModule { }
