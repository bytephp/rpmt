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

import { Address, BaseEntity, Contact, Image, Price } from '@shared/entity/base-entity';
// import { ProjectStatus, ProjectType } from 'src/modules/house/project/entities/project.entity';
import { Amenity, BuildingFeatures, ProjectStatus, ProjectType } from '@shared/enum/base-enum';
import { Project } from '@house/project/entities/project.entity';
import { BuildingUnit } from '@house/building-unit/entities/building-unit.entity';

const { CREATE, UPDATE } = CrudValidationGroups;


@Entity('building')
export class Building extends BaseEntity {
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
    @ApiProperty({ type: 'string', required: true, description: 'Building Name' })
    name: string;

    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: 'text', nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Building Description' })
    description: string;

    @IsOptional({ always: true })
    @Type((t) => Address)
    @Column((type) => Address)
    @ApiProperty({ type: Address, description: 'Building Location' })
    address: Address;

    @IsOptional({ always: true })
    @Column({ name: 'building_type', type: 'enum', nullable: true, enum: ProjectType })
    @ApiProperty({ type: 'enum', enum: ProjectType, description: 'Building Type' })
    buildingType: ProjectType;

    @IsOptional({ always: true })
    @Column({ name: 'building_status', type: 'enum', nullable: true, enum: ProjectStatus})
    @ApiProperty({ type: 'enum', enum: ProjectStatus, description: 'Building Status' })
    buildingStatus: ProjectStatus;

    // Building Start Date
    @IsOptional({ always: true })
    @Type(() => Date)
    @Column({ name: 'start_date', type: 'date', nullable: true, default: null })
    @ApiProperty({ type: 'date', description: 'Building Start Date' })
    startDate: Date;

    // Building Completion Date
    @IsOptional({ always: true })
    @Type(() => Date)
    @Column({ name: 'end_date', type: 'date', nullable: true, default: null })
    @ApiProperty({ type: 'date', description: 'Building Completion Date' })
    endDate: Date;

    //project age.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @Column({ name: 'age', type: 'varchar', nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Building age' })
    age: string;

    //Developer/Owner: The entity responsible for developing or owning the project.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @Column({ name: 'developer', type: 'varchar', length: 100, nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Building Developer' })
    developer: string;

    //Architect: The entity responsible for designing the project.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @Column({ name: 'architect', type: 'varchar', length: 100, nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Building Architect' })
    architect: string;

    //Building Cost: The total cost of the project.
    @IsOptional({ always: true })
    @Type((t) => Price)
    @Column((type) => Price)
    @ApiProperty({ type: Price })
    minPrice: Price;

    //Building Cost: The total cost of the project.
    @Type((t) => Price)
    @Column((type) => Price)
    @ApiProperty({ type: Price })
    maxPrice: Price;


    //Building Size: The total size of the project.
    @IsOptional({ always: true })
    @IsNumber({}, { always: true })
    @Column({ name: 'size', type: 'float', nullable: true, default: null })
    @ApiProperty({ type: 'number', description: 'Building Size' })
    size: number;

    //Building Size Unit: The unit of measurement for the project size.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @MaxLength(100, { always: true })
    @Column({ name: 'size_unit', type: 'varchar', length: 100, nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Building Size Unit' })
    sizeUnit: string;

    //Building Floors: The number of floors in the project.
    @IsOptional({ always: true })
    @IsNumber({}, { always: true })
    @Column({ name: 'floors', type: 'int', nullable: true, default: null })
    @ApiProperty({ type: 'number', description: 'Building Floors' })
    floors: number;

    //Building Units: The number of units in the project.
    @IsOptional({ always: true })
    @IsNumber({}, { always: true })
    @Column({ name: 'units', type: 'int', nullable: true, default: null })
    @ApiProperty({ type: 'number', description: 'Building Units' })
    units: number;

    //Building Units: The number of units in the project.
    @IsOptional({ always: true })
    @IsNumber({}, { always: true })
    @Column({ name: 'units_sold', type: 'int', nullable: true, default: null })
    @ApiProperty({ type: 'number', description: 'Building Units Sold' })
    unitsSold: number;

    //Building Units: The number of units in the project.
    @IsOptional({ always: true })
    @IsNumber({}, { always: true })
    @Column({ name: 'units_available', type: 'int', nullable: true, default: null })
    @ApiProperty({ type: 'number', description: 'Building Units Available' })
    unitsAvailable: number;

    //Floor Plans
    @IsOptional({ always: true })
    @Type((t) => Image)
    @Column((type) => Image)
    @ApiProperty({ type: Image, description: 'Building Floor Plans' })
    floorPlans: Image[];

    //Building Images
    @IsOptional({ always: true })
    @Type((t) => Image)
    @Column((type) => Image)
    @ApiProperty({ type: Image, description: 'Building Images' })
    images: Image[];


    // Building Amenities
    @IsOptional({ always: true })
    @Column({ name: 'building_amenities', type: 'enum', enum: Amenity, default: Amenity.OTHER })
    @ApiProperty({ type: 'enum', enum: Amenity, description: 'Building Amenities' })
    amenities: Amenity[];
    
    // Building Features
    @IsOptional({ always: true })
    @Column({ name: 'building_features', type: 'enum', enum: BuildingFeatures, default: BuildingFeatures.OTHER })
    @ApiProperty({ type: 'enum', enum: BuildingFeatures, description: 'Building Features' })
    features: BuildingFeatures[];

    // Property Manager: Contact information for the property manager responsible for overseeing the block or building.
    @IsOptional({ always: true })
    @Type((t) => Contact)
    @Column((type) => Contact)
    @ApiProperty({ type: Contact, description: 'Building Property Manager' })
    propertyManager: Contact[];
    

    // add projectId to building
    @IsOptional({ always: true })
    @Column({ name: 'project_id', type: 'int', nullable: true, default: null })
    // @ApiProperty({ type: 'number', description: 'Building Project Id' })
    projectId?: number;

    /**
    * Relations
    */

    // many to one relation with project with api property
    @IsOptional({ always: true })
    // @ApiProperty({ type: "string", description: 'Building Project' })
    @ManyToOne((type) => Project, (c) => c.building)
    project?: Project;

    // Unit Information 
    @IsOptional({ always: true })
    // @ApiProperty({ type: "string", description: 'Building Unit' })
    @OneToMany((type) => BuildingUnit, (u) => u.building)
    @Type((t) => BuildingUnit)
    buildingUnit: BuildingUnit[];

}
