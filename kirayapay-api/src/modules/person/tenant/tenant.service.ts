import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Tenant } from './entities/tenant.entity';


@Injectable()
export class TenantService extends TypeOrmCrudService<Tenant> {
  constructor(@InjectRepository(Tenant) repo) {
    super(repo);
  }
}

