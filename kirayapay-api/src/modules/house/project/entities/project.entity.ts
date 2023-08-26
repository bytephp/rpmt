import { CrudValidationGroups } from '@nestjsx/crud';
import { Entity, Column, OneToMany, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';
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

import { Address, BaseEntity, Image, Price } from '@shared/entity/base-entity';
import { Building } from '@house/building/entities/building.entity';
import { ProjectStatus, ProjectType } from '@shared/enum/base-enum';
// import { User } from '../../users/user.entity';
// import { Project } from '../../projects/project.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('project')
export class Project extends BaseEntity {
    @IsOptional({ groups: [UPDATE] })
    @IsEmpty({ groups: [CREATE] })
    @IsNumber({}, { groups: [UPDATE] })
    @PrimaryGeneratedColumn()
    id?: number;

    @IsOptional({ groups: [UPDATE] })
    @IsNotEmpty({ groups: [CREATE] })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @Column({ type: 'varchar', length: 100, nullable: false })
    @ApiProperty({ type: 'string', required: true, description: 'Project Name' })
    name: string;

    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: 'text', nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Project Description' })
    description: string;

    @IsOptional({ always: true })
    @Type((t) => Address)
    @Column((type) => Address)
    @ApiProperty({ type: Address, description: 'Project Location' })
    address: Address;

    @Column({ name: 'project_type', type: 'enum', enum: ProjectType, default: ProjectType.OTHER })
    @ApiProperty({ type: 'enum', enum: ProjectType, description: 'Project Type' })
    projectType: ProjectType;

    @Column({ name: 'project_status', type: 'enum', enum: ProjectStatus, default: ProjectStatus.OTHER })
    @ApiProperty({ type: 'enum', enum: ProjectStatus, description: 'Project Status' })
    projectStatus: ProjectStatus;

    // Project Start Date
    @IsOptional({ always: true })
    @Type(() => Date)
    @Column({ name: 'start_date', type: 'date', nullable: true, default: null })
    @ApiProperty({ type: 'date', description: 'Project Start Date' })
    startDate: Date;

    // Project Completion Date
    @IsOptional({ always: true })
    @Type(() => Date)
    @Column({ name: 'end_date', type: 'date', nullable: true, default: null })
    @ApiProperty({ type: 'date', description: 'Project Completion Date' })
    endDate: Date;

    //project age.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @Column({ name: 'age', type: 'varchar', nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Project age' })
    age: string;

    //Developer/Owner: The entity responsible for developing or owning the project.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @Column({ name: 'developer', type: 'varchar', length: 100, nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Project Developer' })
    developer: string;

    //Architect: The entity responsible for designing the project.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @Column({ name: 'architect', type: 'varchar', length: 100, nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Project Architect' })
    architect: string;

    //Contractor: The entity responsible for constructing the project.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @Column({ name: 'contractor', type: 'varchar', length: 100, nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Project Contractor' })
    contractor: string;

    //Project Cost: The total cost of the project.
    @IsOptional({ always: true })
    @Type((t) => Price)
    @Column((type) => Price)
    @ApiProperty({ type: Price })
    minPrice: Price;

    //Project Cost: The total cost of the project.
    @Type((t) => Price)
    @Column((type) => Price)
    @ApiProperty({ type: Price })
    maxPrice: Price;


    //Project Size: The total size of the project.
    @IsOptional({ always: true })
    @IsNumber({}, { always: true })
    @Column({ name: 'size', type: 'float', nullable: true, default: null })
    @ApiProperty({ type: 'number', description: 'Project Size' })
    size: number;

    //Project Size Unit: The unit of measurement for the project size.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @Column({ name: 'size_unit', type: 'varchar', length: 100, nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Project Size Unit' })
    sizeUnit: string;

    //Project Floors: The number of floors in the project.
    @IsOptional({ always: true })
    @IsNumber({}, { always: true })
    @Column({ name: 'floors', type: 'int', nullable: true, default: null })
    @ApiProperty({ type: 'number', description: 'Project Floors' })
    floors: number;

    //Project Units: The number of units in the project.
    @IsOptional({ always: true })
    @IsNumber({}, { always: true })
    @Column({ name: 'units', type: 'int', nullable: true, default: null })
    @ApiProperty({ type: 'number', description: 'Project Units' })
    units: number;

    //Project Units: The number of units in the project.
    @IsOptional({ always: true })
    @IsNumber({}, { always: true })
    @Column({ name: 'units_sold', type: 'int', nullable: true, default: null })
    @ApiProperty({ type: 'number', description: 'Project Units Sold' })
    unitsSold: number;

    //Project Units: The number of units in the project.
    @IsOptional({ always: true })
    @IsNumber({}, { always: true })
    @Column({ name: 'units_available', type: 'int', nullable: true, default: null })
    @ApiProperty({ type: 'number', description: 'Project Units Available' })
    unitsAvailable: number;

    //Project Units: The number of units in the project.
    @IsOptional({ always: true })
    @IsNumber({}, { always: true })
    @Column({ name: 'units_reserved', type: 'int', nullable: true, default: null })
    @ApiProperty({ type: 'number', description: 'Project Units Reserved' })
    unitsReserved: number;

    // Funding Sources: Information about where the project's funding is coming from, such as loans, investors, grants, etc.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ name: 'funding_sources', type: 'text', nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Project Funding Sources' })
    fundingSources: string;

    //Key Features: Highlight important features of the project, such as amenities, green initiatives, unique design elements, etc. in array and enum
    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ name: 'key_features', nullable: true})
    @ApiProperty({ type: 'string', description: 'Project Key Features' })
    keyFeatures: string;
    
    //Project readyToMove
    @IsOptional({ always: true })
    @IsBoolean({ always: true })
    @Column({ name: 'ready_to_move', type: 'boolean', nullable: true, default: false })
    @ApiProperty({ type: 'boolean', description: 'Project readyToMove' })
    readyToMove: boolean;
    
    //Project gatedSecurity
    @IsOptional({ always: true })
    @IsBoolean({ always: true })
    @Column({ name: 'gated_security', type: 'boolean', nullable: true, default: false })
    @ApiProperty({ type: 'boolean', description: 'Project gatedSecurity' })
    gatedSecurity: boolean;

    //reraId
    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ name: 'rera_id', type: 'varchar', length: 100, nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Project reraId' })
    reraId: string;

    // brochures
    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ name: 'brochures', nullable: true })
    @ApiProperty({ type: 'string', description: 'Project brochures' })
    brochures: string;

    // images
    @IsOptional({ always: true })
    @Type((t) => Image)
    @Column((type) => Image)
    @ApiProperty({ type: Image })
    images: Image[];


    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;

    /**
     * Relations
     */

    @OneToMany((type) => Building, (u) => u.project)
    @Type((t) => Building)
    building: Building[];

    // @OneToMany((type) => Project, (p) => p.company)
    // projects: Project[];
}
