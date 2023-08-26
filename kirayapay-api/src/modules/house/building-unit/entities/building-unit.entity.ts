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
    IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger'

import { Address, BaseEntity, Contact, Image, Price } from '@shared/entity/base-entity';
import { Amenity, BuildingFeatures, FurnishingItems, ProjectStatus, UnitFurnishing, UnitType } from '@shared/enum/base-enum';
import { Building } from '@house/building/entities/building.entity';
import { BuildLandMapping } from '@mapping/build-land-mapping/entities/build-land-mapping.entity';

const { CREATE, UPDATE } = CrudValidationGroups;


@Entity('buildingUnit')
export class BuildingUnit extends BaseEntity {
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
    @ApiProperty({ type: 'string', required: true, description: 'Unit Name' })
    name: string;

    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: 'text', nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Unit Description' })
    description: string;


    // unit/Flat Number: The unique identifier or number assigned to the unit.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: 'varchar', length: 100, nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Unit Number' })
    unitNumber: string;

    // unit/Flat Type: The type of unit/flat, such as apartment, townhouse, or villa.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: 'enum', enum: UnitType, nullable: true, default: UnitType.OTHERS })
    @ApiProperty({ type: 'string', enum: UnitType, description: 'Unit Type' })
    unitType: UnitType;

    // Layout/Configuration: Describe the layout of the unit, including the number of bedrooms, bathrooms, living area, and kitchen.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: 'varchar', length: 100, nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Unit Layout' })
    unitLayout: string;

    // unit/Flat View: The view from the unit/flat, such as sea view, city view, or garden view.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: 'varchar', length: 100, nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Unit View' })
    unitView: string;

    // unit/Flat Area: The area of the unit/flat in square meters.
    @IsOptional({ always: true })
    @IsNumber({}, { always: true })
    @Column({ type: 'float', nullable: true, default: null })
    @ApiProperty({ type: 'number', description: 'Unit Area' })
    unitArea: number;

    // Furnished/Unfurnished: Indicate whether the unit comes furnished or unfurnished.
    @IsOptional({ always: true })
    @IsBoolean({ always: true })
    @Column({ type: 'boolean', nullable: true, default: null })
    @ApiProperty({ type: 'boolean', description: 'Unit Furnished' })
    unitFurnished: boolean;

    // furnishing type: The type of furnishing, such as fully furnished, semi-furnished, or unfurnished.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: 'enum', enum: UnitFurnishing, nullable: true, default: UnitFurnishing.OTHER })
    @ApiProperty({ type: 'string', enum: UnitFurnishing, description: 'Unit Features' })
    unitFurnishingType: UnitFurnishing;

    // furnishing items: The items included in the unit/flat, such as a bed, sofa, or kitchen appliances.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: 'enum', enum: FurnishingItems, nullable: true, default: [FurnishingItems.OTHERS] })
    @ApiProperty({ type: 'string', enum: FurnishingItems, description: 'Unit Features' })
    unitFurnishingItems: [FurnishingItems];

    //Owner Information: Details about the owner of the unit, including contact information and ownership status.
    @IsOptional({ always: true })
    @Type(() => Contact)
    @Column((type) => Contact)
    @ApiProperty({ type: Contact, description: 'Unit Owner Information' })
    unitOwnerInfo: Contact;


    // unit/Flat Floor: The floor on which the unit/flat is located.
    @IsOptional({ always: true })
    @IsNumber({}, { always: true })
    @Column({ type: 'int', nullable: true, default: null })
    @ApiProperty({ type: 'number', description: 'Unit Floor' })
    unitFloor: number;

    //
    // unit/Flat Features: The features of the unit/flat, such as a balcony, terrace, or garden.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: 'enum', enum: BuildingFeatures, nullable: true, default: BuildingFeatures.OTHER })
    @ApiProperty({ type: 'string', enum: BuildingFeatures, description: 'Unit Features' })
    unitFeatures: BuildingFeatures[];

    // unit/Flat Amenities: The amenities available to the unit/flat, such as a pool, gym, or parking.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: 'enum', enum: Amenity, nullable: true, default: Amenity.OTHER })
    @ApiProperty({ type: 'string', enum: Amenity, description: 'Unit Amenities' })
    unitAmenities: Amenity[];

    // unit/Flat Price: The price of the unit/flat.
    @IsOptional({ always: true })
    @Type(() => Price)
    @Column(() => Price)
    @ApiProperty({ type: Price, description: 'Unit Price' })
    price: Price;

    // unit/Flat Status: The status of the unit/flat, such as available, unavailable, or reserved.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ name: 'unit_status', type: 'enum', nullable: true, enum: ProjectStatus })
    @ApiProperty({ type: 'enum', enum: ProjectStatus, description: 'Unit Status' })
    status: ProjectStatus;


    // unit/Flat Images: The images of the unit/flat.
    @IsOptional({ always: true })
    @Type(() => Image)
    @Column(() => Image)
    @ApiProperty({ type: Image, description: 'Unit Images' })
    images: Image[];

    // unit/Flat Video: The video of the unit/flat.
    @IsOptional({ always: true })
    @IsString({ always: true })
    @Column({ type: 'text', nullable: true, default: null })
    @ApiProperty({ type: 'string', description: 'Unit Video' })
    video: string;


    // isrented: Indicate whether the unit is rented or not.
    @IsOptional({ always: true })
    @IsBoolean({ always: true })
    @Column({ type: 'boolean', nullable: true, default: null })
    @ApiProperty({ type: 'boolean', description: 'Unit is Rented' })
    isRented: boolean;

    // unit/Flat Rented: The details of the tenant who is renting the unit/flat.
    @IsOptional({ always: true })
    @Type(() => Contact)
    @Column((type) => Contact)
    @ApiProperty({ type: Contact, description: 'Unit Rented' })
    rented: Contact;
    
    // rent amount: The amount of rent paid by the tenant.
    @IsOptional({ always: true })
    @Type(() => Price)
    @Column(() => Price)
    @ApiProperty({ type: Price, description: 'Unit Rent Amount' })
    rentAmount: Price;

    // rent start date: The date on which the tenant started renting the unit.
    @IsOptional({ always: true })
    @IsDate({ always: true })
    @Column({ type: 'timestamp', nullable: true, default: null })
    @ApiProperty({ type: 'string', format: 'date-time', description: 'Unit Rent Start Date' })
    rentStartDate: Date;
    
    // rent end date: The date on which the tenant will stop renting the unit.
    @IsOptional({ always: true })
    @IsDate({ always: true })
    @Column({ type: 'timestamp', nullable: true, default: null })
    @ApiProperty({ type: 'string', format: 'date-time', description: 'Unit Rent End Date' })
    rentEndDate: Date;

    // unit/Flat Contact: The contact details of the unit/flat.
    @IsOptional({ always: true })
    @Type(() => Contact)
    @Column(() => Contact)
    @ApiProperty({ type: Contact, description: 'Unit Contact' })
    contact: Contact;

    // unit/Flat Address: The address of the unit/flat.
    @IsOptional({ always: true })
    @Type(() => Address)
    @Column(() => Address)
    @ApiProperty({ type: Address, description: 'Unit Address' })
    address: Address;


    // add buildingId to building unit
    @IsOptional({ always: true })
    @Column({ name: 'building_id', type: 'int', nullable: true, default: null })
    // @ApiProperty({ type: 'number', description: 'Building Id' })
    buildingId?: number;

    /**
     * Relations
     */

    // many to one relation with project with api property
    @IsOptional({ always: true })
    // @ApiProperty({ type: "string", description: 'Building' })
    @ManyToOne((type) => Building, (c) => c.buildingUnit)
    building?: Building;

    // Unit mapping with landlord Information 
    @IsOptional({ always: true })
    // @ApiProperty({ type: "string", description: 'Building Unit' })
    @OneToMany((type) => BuildLandMapping, (u) => u.buildingUnit)
    @Type((t) => BuildLandMapping)
    unitLandlord: BuildLandMapping[];
}
