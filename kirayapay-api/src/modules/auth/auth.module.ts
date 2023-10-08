import { Module } from '@nestjs/common';

import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { LandlordAuthModule } from './landlord-auth/landlord-auth.module';

@Module({
    imports: [
        AdminAuthModule,
        LandlordAuthModule,
    ],
})
export class AuthModulesModule {}
