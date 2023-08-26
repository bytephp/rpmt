import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @CreateDateColumn({ nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt?: Date;
}
export class Contact {
  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Contact name' })
  name: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Contact phone' })
  phone: string;

  // whatsapp
  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Contact whatsapp number' })
  whatsappNumber: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Contact email' })
  email: string;


  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Contact designation' })
  designation: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Contact department' })
  department: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string' })
  company: string;

  // tags
  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string' })
  tags: string;


}
export class PersonName {
  @IsString({ always: true })
  @Column({ nullable: false })
  @ApiProperty({ type: 'string', example: faker.internet.userName() })
  first: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string' })
  middle: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', example: faker.internet.userName() })
  last: string;

}
export class socialLogin {
  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Social Id' })
  socailId: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Social Provider',example:'google' })
  provider: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Social Token' })
  token: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Social Email' })
  email: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Social Name' })
  name: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Social Photo' })
  photo: string;
}
export class Price {
  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string' })
  price: string;

  @IsNumber()
  @Column({ nullable: true })
  @ApiProperty({ type: 'number' })
  priceLong: number;
}
export class Image {
  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Image URL' })
  url: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Image name' })
  name: string;

  // tags
  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'Image tags' })
  tags: string;

  // width
  @IsString({ always: true })
  @Column({ nullable: true })
  width: string;

  // height
  @IsString({ always: true })
  @Column({ nullable: true })
  height: string;

  // size
  @IsString({ always: true })
  @Column({ nullable: true })
  size: string;


}
export class Address {
  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'door No / flat No' })
  doorNo: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'street' })
  street: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'locality' })
  locality: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'area' })
  area: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'city' })
  city: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  @ApiProperty({ type: 'string', description: 'state' })
  state: string;

  @IsString({ always: true })
  @Column({ nullable: true, default: 'India' })
  @ApiProperty({ type: 'string', description: 'country' })
  country: string;

  @Column({ nullable: true })
  @ApiProperty({ type: 'string', required: true, description: 'pincode' })
  pincode: string;

  @IsString({ always: true })
  @Column({ nullable: true, default: '' })
  completeAddress: string;

  @Column({ nullable: true, default: '' })
  latitude: string;

  @Column({ nullable: true, default: '' })
  longitude: string;

}