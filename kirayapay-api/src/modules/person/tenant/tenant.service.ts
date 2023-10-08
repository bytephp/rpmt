import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Tenant } from './entities/tenant.entity';
import { CreateTenantDto } from './dto/create-tenant.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class TenantService extends TypeOrmCrudService<Tenant> {
  constructor(@InjectRepository(Tenant) repo) {
    super(repo);
  }

  async create(registerUserDto: CreateTenantDto): Promise<Tenant> {

    const { username, password } = registerUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new Tenant();
    user.email = registerUserDto.email;
    user.phone = registerUserDto.phone;
    user.name = registerUserDto.name;
    // user.phone = registerUserDto.phone;
    user.username = username;
    user.password = hashedPassword;

    return this.repo.save(user);
  }

  async findSingle(id: number): Promise<Tenant> {
    return this.repo.findOne({ where: { id } });
  }

  async findByUsername(username: string): Promise<Tenant> {
    return this.repo.findOne({ where: { username } });
  }
}

