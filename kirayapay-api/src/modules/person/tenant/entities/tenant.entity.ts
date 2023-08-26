import { CrudValidationGroups } from '@nestjsx/crud';
import { Entity, Column, OneToMany, PrimaryGeneratedColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import {
    IsOptional,
    IsString,
    MaxLength,
    IsNotEmpty,
    IsNumber,
    IsEmpty,
    IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger'
import { faker } from '@faker-js/faker';

import { BaseEntity, PersonName, socialLogin } from '@shared/entity/base-entity';
import { LandTenantMapping } from '@mapping/land-tenant-mapping/entities/land-tenant-mapping.entity';

const { CREATE, UPDATE } = CrudValidationGroups;


@Entity('tenant')
export class Tenant extends BaseEntity {
    @IsOptional({ groups: [UPDATE] })
    @IsEmpty({ groups: [CREATE] })
    @IsNumber({}, { groups: [UPDATE] })
    @PrimaryGeneratedColumn()
    id?: number;


    @IsOptional({ always: true })
    @Type((t) => PersonName)
    @Column((type) => PersonName)
    @ApiProperty({ type: PersonName, description: 'Tenant Name' })
    name: PersonName;



    @IsOptional({ always: true })
    // @IsString()
    // @MaxLength(10)
    @Column({ nullable: true })
    @ApiProperty({ type: 'number', description: 'Contact phone', example: 9711048756, })
    phone: string;

    // whatsapp
    @IsOptional({ always: true })
    @MaxLength(10)
    @IsString({ always: true })
    @Column({ nullable: true })
    @ApiProperty({ type: 'string', example: 9711048756, description: 'Contact whatsapp number' })
    whatsappNumber: string;

    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ nullable: false })
    @ApiProperty({ type: 'string', description: 'Contact email', example: faker.internet.email(), })
    email: string;

    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ nullable: true })
    @ApiProperty({ type: 'string', description: 'password', example: faker.internet.password(), })
    password: string;

    @IsOptional({ always: true })
    @Type((t) => socialLogin)
    @Column((type) => socialLogin)
    @ApiProperty({ type: socialLogin, description: 'Social Login' })
    socialAuth: socialLogin;


    /**
     * Relations
     */

    // landlord mapping with Unit Information
    @IsOptional({ always: true })
    // @ApiProperty({ type: "string", description: 'Building Unit' })
    @OneToMany((type) => LandTenantMapping, (u) => u.tenant)
    @Type((t) => LandTenantMapping)
    buildingUnit: LandTenantMapping[];
}
