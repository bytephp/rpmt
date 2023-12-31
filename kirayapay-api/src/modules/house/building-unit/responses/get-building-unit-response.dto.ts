import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class GetBuildingUnitResponseDto {
  @ApiProperty({ type: 'number' })
  id: string;

  @ApiProperty({ type: 'string' })
  name: string;

  @ApiProperty({ type: 'string' })
  description: string;

  @Exclude()
  createdAt: any;

  @Exclude()
  updatedAt: any;
}
