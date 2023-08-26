import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Building } from './entities/building.entity';


@Injectable()
export class BuildingService extends TypeOrmCrudService<Building> {
  constructor(@InjectRepository(Building) repo) {
    super(repo);
  }
}
