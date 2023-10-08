import { CrudValidationGroups } from '@nestjsx/crud';
import { Entity, Column, OneToMany, PrimaryGeneratedColumn, DeleteDateColumn, ManyToOne, ManyToMany } from 'typeorm';
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
import * as bcrypt from 'bcrypt';

import { BaseEntity, PersonName, socialLogin } from '@shared/entity/base-entity';
import { BuildLandMapping } from '@mapping/build-land-mapping/entities/build-land-mapping.entity';

const { CREATE, UPDATE } = CrudValidationGroups;


@Entity('landlord')
export class Landlord extends BaseEntity {
    @IsOptional({ groups: [UPDATE] })
    @IsEmpty({ groups: [CREATE] })
    @IsNumber({}, { groups: [UPDATE] })
    @PrimaryGeneratedColumn()
    id?: number;


    @IsOptional({ always: true })
    @Type((t) => PersonName)
    @Column((type) => PersonName)
    @ApiProperty({ type: PersonName, description: 'Admin Name' })
    name: PersonName;



    @IsOptional({ always: true })
    // @IsNumber()
    // @MaxLength(10)
    @Column({ nullable: true })
    @ApiProperty({ type: 'number', description: 'Contact phone', example: 9711048756, })
    phone: string;

    // whatsapp
    @IsOptional({ always: true })
    // @MaxLength(10)
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

    @Column()
    @ApiProperty({ type: 'string', description: 'User Name', example: faker.internet.userName(), })
    username: string;

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
    /**
     * Relations
     */

    // landlord mapping with Unit Information
    @IsOptional({ always: true })
    // @ApiProperty({ type: "string", description: 'Building Unit' })
    @OneToMany((type) => BuildLandMapping, (u) => u.landlord)
    @Type((t) => BuildLandMapping)
    buildingUnit: BuildLandMapping[];
}
