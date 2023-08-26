import { ApiProperty } from '@nestjs/swagger'
import { Exclude, Type } from 'class-transformer'
import { IsEmpty, IsNotEmpty, IsString, IsIn } from 'class-validator'
import { CrudValidationGroups } from '@nestjsx/crud'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, BeforeInsert, ManyToOne, OneToOne, ManyToMany } from 'typeorm'
import { Building } from '@house/building/entities/building.entity'
import { BuildingUnit } from '@house/building-unit/entities/building-unit.entity'
import { Landlord } from '@person/landlord/entities/landlord.entity'


const { CREATE, UPDATE } = CrudValidationGroups

type Group = 'user' | 'admin'

@Entity("build_land_mapping")
export class BuildLandMapping {
    @IsEmpty()
    @PrimaryGeneratedColumn()
    id: number

    // one to one relation with Building Unit with bl mapping
    @IsNotEmpty({ always: true })
    @ApiProperty({ type: 'number', description: 'Building Unit Id' })
    @ManyToOne((type) => BuildingUnit, (c) => c.unitLandlord)
    buildingUnit?: BuildingUnit;

    // one to one relation with Building Unit with bl mapping
    @IsNotEmpty({ always: true })
    @ApiProperty({ type: 'number', description: 'Landlord Id' })
    @ManyToOne((type) => Landlord, (c) => c.buildingUnit)
    landlord?: Landlord;
    
}
