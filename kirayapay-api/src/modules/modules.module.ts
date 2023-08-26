import { Module } from '@nestjs/common';

import { ProjectModule } from './house/project/project.module';
import { BuildingModule } from './house/building/building.module';
import { BuildingUnitModule } from './house/building-unit/building-unit.module';
import { SuperAdminModule } from './person/super-admin/super-admin.module';
import { LandlordModule } from './person/landlord/landlord.module';
import { TenantModule } from './person/tenant/tenant.module';
import { BuildLandMappingModule } from './mapping/build-land-mapping/build-land-mapping.module';
import { LandTenantMappingModule } from './mapping/land-tenant-mapping/land-tenant-mapping.module';

@Module({
    imports: [
        ProjectModule,
        BuildingModule,
        BuildingUnitModule,
        SuperAdminModule,
        LandlordModule,
        TenantModule,
        ModulesModule,
        BuildLandMappingModule,
        LandTenantMappingModule,
    ],
})
export class ModulesModule {}
