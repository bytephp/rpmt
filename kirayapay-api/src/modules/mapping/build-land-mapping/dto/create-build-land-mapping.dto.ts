import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateBuildLandMappingDto {
    @ApiProperty({
        type: 'number',
        required: true,
    })
    @IsNotEmpty()
    @Type(() => Number)
    buildingId: number;


    @ApiProperty({
        type: 'number',
        required: true,
    })
    @IsNotEmpty()
    @Type(() => Number)
    landlordId: number;
}
