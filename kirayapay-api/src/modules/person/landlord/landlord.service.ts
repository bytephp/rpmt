import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Landlord } from './entities/landlord.entity';


@Injectable()
export class LandlordService extends TypeOrmCrudService<Landlord> {
  constructor(@InjectRepository(Landlord) repo) {
    super(repo);
  }
}

