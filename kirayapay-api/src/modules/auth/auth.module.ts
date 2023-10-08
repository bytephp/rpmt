import { Module } from '@nestjs/common';

import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { LandlordAuthModule } from './landlord-auth/landlord-auth.module';
import { TenantAuthModule } from './tenant-auth/tenant-auth.module';

@Module({
    imports: [
        AdminAuthModule,
        LandlordAuthModule,
        TenantAuthModule,
    ],
})
export class AuthModulesModule {}
