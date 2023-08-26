import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class GetTenantResponseDto {
  @ApiProperty({ type: 'number' })
  id: string;

  @Exclude()
  createdAt: any;

  @Exclude()
  updatedAt: any;
}
