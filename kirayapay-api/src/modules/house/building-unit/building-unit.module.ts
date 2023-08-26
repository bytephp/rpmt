import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BuildingUnit } from './entities/building-unit.entity';
import { BuildingUnitService } from './building-unit.service';
import { BuildingUnitController } from './building-unit.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BuildingUnit])],
  exports: [BuildingUnitService],
  controllers: [BuildingUnitController],
  providers: [BuildingUnitService],
})
export class BuildingUnitModule {}
