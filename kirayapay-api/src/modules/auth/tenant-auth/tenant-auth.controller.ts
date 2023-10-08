import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TenantAuthService } from './tenant-auth.service';
import { TenantService } from '@person/tenant/tenant.service';
import { SignInDto } from './dto/sign-in.dto';
import { Public } from './decorators/public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { JwtRefreshTokenGuard } from './guards/jwt-refresh-token.guard';
import { CreateTenantDto } from '@person/tenant/dto/create-tenant.dto';

@ApiTags('Tenant Auth')
@Controller('tenant-auth')
export class TenantAuthController {
  constructor(
    private readonly tenantAuthService: TenantAuthService,
    private readonly usersService: TenantService,
    private readonly jwtService: JwtService,
  ) { }

  @Post('sign-up')
  async signUp(@Body() registerUserDto: CreateTenantDto) {
    return this.usersService.create(registerUserDto);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto) {
    return this.tenantAuthService.signIn(signInDto);
  }

  @Post('refresh-token')
  @UseGuards(JwtRefreshTokenGuard)
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    console.log(refreshTokenDto);

    return this.tenantAuthService.refreshAccessToken(refreshTokenDto.refresh_token);
  }

  @UseGuards(JwtAuthGuard)
  @Post('invalidate-token')
  async invalidateToken(@Headers('authorization') authorization: string) {
    const token = authorization.split(' ')[1];
    await this.tenantAuthService.invalidateToken(token);
    return { message: 'Token invalidated successfully' };
  }
}
