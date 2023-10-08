import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LandlordAuthService } from './landlord-auth.service';
import { LandlordService } from '@person/landlord/landlord.service';
import { SignInDto } from './dto/sign-in.dto';
import { Public } from './decorators/public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { JwtRefreshTokenGuard } from './guards/jwt-refresh-token.guard';
import { CreateLandlordDto } from '@person/landlord/dto/create-landlord.dto';

@ApiTags('Landlord Auth')
@Controller('landlord-auth')
export class LandlordAuthController {
  constructor(
    private readonly landlordAuthService: LandlordAuthService,
    private readonly usersService: LandlordService,
    private readonly jwtService: JwtService,
  ) { }

  @Post('sign-up')
  async signUp(@Body() registerUserDto: CreateLandlordDto) {
    return this.usersService.create(registerUserDto);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto) {
    return this.landlordAuthService.signIn(signInDto);
  }

  @Post('refresh-token')
  @UseGuards(JwtRefreshTokenGuard)
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    console.log(refreshTokenDto);

    return this.landlordAuthService.refreshAccessToken(refreshTokenDto.refresh_token);
  }

  @UseGuards(JwtAuthGuard)
  @Post('invalidate-token')
  async invalidateToken(@Headers('authorization') authorization: string) {
    const token = authorization.split(' ')[1];
    await this.landlordAuthService.invalidateToken(token);
    return { message: 'Token invalidated successfully' };
  }
}
