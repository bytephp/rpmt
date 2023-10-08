import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
// import { UsersService } from '../../users/users.service';
import { JwtPayload } from '../jwt-payload.interface';
import { JwtRefreshTokenStrategy } from './jwt-refresh-token.strategy';
import { SuperAdminService } from '@person/super-admin/super-admin.service';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtRefreshTokenStrategy.name);
  constructor(private readonly usersService: SuperAdminService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'secret',
    });
    this.logger.warn('JwtStrategy initialized');
  }

  async validate(payload: JwtPayload): Promise<any> {
    this.logger.warn(`Payload: ${JSON.stringify(payload)}`);
    const user = await this.usersService.findSingle(payload.sub);
    if (!user) {
      this.logger.error('User not found');
      throw new UnauthorizedException();
    }
    return user;
  }
}
