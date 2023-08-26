import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BuildingUnit } from './entities/building-unit.entity';

@Injectable()
export class BuildingUnitService extends TypeOrmCrudService<BuildingUnit> {
  constructor(@InjectRepository(BuildingUnit) repo) {
    super(repo);
  }
}
