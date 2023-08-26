import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SuperAdmin } from './entities/super-admin.entity';

@Injectable()
export class SuperAdminService extends TypeOrmCrudService<SuperAdmin> {
  constructor(@InjectRepository(SuperAdmin) repo) {
    super(repo);
  }
}
