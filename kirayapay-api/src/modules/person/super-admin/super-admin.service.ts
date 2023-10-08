import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SuperAdmin } from './entities/super-admin.entity';
import { CreateSuperAdminDto } from './dto/create-super-admin.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SuperAdminService extends TypeOrmCrudService<SuperAdmin> {
  constructor(@InjectRepository(SuperAdmin) repo) {
    super(repo);
  }

  async create(registerUserDto: CreateSuperAdminDto): Promise<SuperAdmin> {
    
    const { username, password } = registerUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new SuperAdmin();
    user.email = registerUserDto.email;
    user.phone = registerUserDto.phone;
    user.name = registerUserDto.name;
    // user.phone = registerUserDto.phone;
    user.username = username;
    user.password = hashedPassword;

    return this.repo.save(user);
  }

  async findSingle(id: number): Promise<SuperAdmin> {
    return this.repo.findOne({ where: { id } });
  }

  async findByUsername(username: string): Promise<SuperAdmin> {
    return this.repo.findOne({ where: { username } });
  }
}
