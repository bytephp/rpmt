import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AdminAuthService } from './admin-auth.service';
import { SuperAdminService } from '@person/super-admin/super-admin.service';
import { SignInDto } from './dto/sign-in.dto';
import { Public } from './decorators/public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { JwtRefreshTokenGuard } from './guards/jwt-refresh-token.guard';
import { CreateSuperAdminDto } from '@person/super-admin/dto/create-super-admin.dto';

@ApiTags('Super Admin Auth')
@Controller('admin-auth')
export class AdminAuthController {
  constructor(
    private readonly adminAuthService: AdminAuthService,
    private readonly usersService: SuperAdminService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('sign-up')
  async signUp(@Body() registerUserDto: CreateSuperAdminDto) {
    return this.usersService.create(registerUserDto);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto) {
    return this.adminAuthService.signIn(signInDto);
  }

  @Post('refresh-token')
  @UseGuards(JwtRefreshTokenGuard)
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    console.log(refreshTokenDto);
    
    return this.adminAuthService.refreshAccessToken(refreshTokenDto.refresh_token);
  }

  @UseGuards(JwtAuthGuard)
  @Post('invalidate-token')
  async invalidateToken(@Headers('authorization') authorization: string) {
    const token = authorization.split(' ')[1];
    await this.adminAuthService.invalidateToken(token);
    return { message: 'Token invalidated successfully' };
  }
}
