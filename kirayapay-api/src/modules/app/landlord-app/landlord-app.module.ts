import { Module } from '@nestjs/common';
import { LandlordAppService } from './landlord-app.service';
import { LandlordAppController } from './landlord-app.controller';
// import { LeaseController } from './components/lease/lease.controller';
// import { MaintenanceController } from './components/maintenance/maintenance.controller';
// import { PropertyController } from './components/property/property.controller';
// import { TenantsController } from './components/tenants/tenants.controller';
// import { TenantsService } from './components/tenants/tenants.service';
// import { PropertyService } from './components/property/property.service';
// import { MaintenanceService } from './components/maintenance/maintenance.service';
// import { LeaseService } from './components/lease/lease.service';
import { LeaseModule } from './components/lease/lease.module';
import { MaintenanceModule } from './components/maintenance/maintenance.module';
import { PropertyModule } from './components/property/property.module';
import { TenantsModule } from './components/tenants/tenants.module';

@Module({
  controllers: [LandlordAppController],
  providers: [LandlordAppService],
  imports: [LeaseModule, MaintenanceModule, PropertyModule, TenantsModule],
  // controllers: [LandlordAppController, LeaseController, MaintenanceController, PropertyController, TenantsController],
  // providers: [LandlordAppService, TenantsService, PropertyService, MaintenanceService, LeaseService],
})
export class LandlordAppModule { }
