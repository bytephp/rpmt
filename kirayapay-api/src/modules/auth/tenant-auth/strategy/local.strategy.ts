import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { TenantAuthService } from '../tenant-auth.service';
import { JwtRefreshTokenStrategy } from './jwt-refresh-token.strategy';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtRefreshTokenStrategy.name);

  constructor(private authService: TenantAuthService) {
    super({ usernameField: 'username' });
    this.logger.log('Tenant LocalStrategy initialized');
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
