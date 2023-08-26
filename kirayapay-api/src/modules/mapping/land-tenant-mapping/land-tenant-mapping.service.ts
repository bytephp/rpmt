import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { LandTenantMapping } from './entities/land-tenant-mapping.entity';

@Injectable()
export class LandTenantMappingService extends TypeOrmCrudService<LandTenantMapping> {
  constructor(@InjectRepository(LandTenantMapping) repo) {
    super(repo);
  }
}
