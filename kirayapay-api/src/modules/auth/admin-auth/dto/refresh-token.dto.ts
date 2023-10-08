import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'

export class RefreshTokenDto {
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'refresh_token' })
  refresh_token: string;
}
