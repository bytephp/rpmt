import { Module } from '@nestjs/common';
import { AdminAuthService } from './admin-auth.service';
import { AdminAuthController } from './admin-auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';
// import { ConfigModule } from './config/config.module';
import { RefreshTokenIdsStorage } from './refresh-token-ids-storage';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtRefreshTokenStrategy } from './strategy/jwt-refresh-token.strategy';
import { SuperAdminModule } from '@person/super-admin/super-admin.module';
import { SuperAdmin } from '@person/super-admin/entities/super-admin.entity';
import { SuperAdminService } from '@person/super-admin/super-admin.service';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [
    SuperAdminModule,
    ConfigModule,
    TypeOrmModule.forFeature([SuperAdmin]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    RefreshTokenIdsStorage,
    AdminAuthService,
    JwtStrategy,
    SuperAdminService,
    LocalStrategy,
    JwtRefreshTokenStrategy,
  ],
  exports: [AdminAuthService],
  controllers: [AdminAuthController],
})
export class AdminAuthModule {}
