import { Module } from '@nestjs/common';
import { TenantAuthService } from './tenant-auth.service';
import { TenantAuthController } from './tenant-auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';
// import { ConfigModule } from './config/config.module';
import { RefreshTokenIdsStorage } from './refresh-token-ids-storage';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtRefreshTokenStrategy } from './strategy/jwt-refresh-token.strategy';
import { ConfigModule } from 'src/config/config.module';

import { TenantModule } from '@person/tenant/tenant.module';
import { Tenant } from '@person/tenant/entities/tenant.entity';
import { TenantService } from '@person/tenant/tenant.service';

@Module({
  imports: [
    TenantModule,
    ConfigModule,
    TypeOrmModule.forFeature([Tenant]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    RefreshTokenIdsStorage,
    TenantAuthService,
    JwtStrategy,
    TenantService,
    LocalStrategy,
    JwtRefreshTokenStrategy,
  ],
  exports: [TenantAuthService],
  controllers: [TenantAuthController],
})
export class TenantAuthModule {}
