import { Module } from '@nestjs/common';
import { LandlordAuthService } from './landlord-auth.service';
import { LandlordAuthController } from './landlord-auth.controller';
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

import { LandlordModule } from '@person/landlord/landlord.module';
import { Landlord } from '@person/landlord/entities/landlord.entity';
import { LandlordService } from '@person/landlord/landlord.service';

@Module({
  imports: [
    LandlordModule,
    ConfigModule,
    TypeOrmModule.forFeature([Landlord]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    RefreshTokenIdsStorage,
    LandlordAuthService,
    JwtStrategy,
    LandlordService,
    LocalStrategy,
    JwtRefreshTokenStrategy,
  ],
  exports: [LandlordAuthService],
  controllers: [LandlordAuthController],
})
export class LandlordAuthModule {}
