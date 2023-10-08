import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Landlord } from './entities/landlord.entity';
import { CreateLandlordDto } from './dto/create-landlord.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class LandlordService extends TypeOrmCrudService<Landlord> {
  constructor(@InjectRepository(Landlord) repo) {
    super(repo);
  }

  async create(registerUserDto: CreateLandlordDto): Promise<Landlord> {
    console.log(registerUserDto);

    const { username, password } = registerUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new Landlord();
    user.email = registerUserDto.email;
    user.phone = registerUserDto.phone;
    user.name = registerUserDto.name;
    // user.phone = registerUserDto.phone;
    user.username = username;
    user.password = hashedPassword;

    return this.repo.save(user);
  }

  async findSingle(id: number): Promise<Landlord> {
    return this.repo.findOne({ where: { id } });
  }

  async findByUsername(username: string): Promise<Landlord> {
    return this.repo.findOne({ where: { username } });
  }
}

