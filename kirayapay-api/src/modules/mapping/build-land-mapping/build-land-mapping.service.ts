import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BuildLandMapping } from './entities/build-land-mapping.entity';

@Injectable()
export class BuildLandMappingService extends TypeOrmCrudService<BuildLandMapping> {
  constructor(@InjectRepository(BuildLandMapping) repo) {
    super(repo);
  }
}
