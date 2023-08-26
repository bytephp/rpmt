import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Building } from './entities/building.entity';
import { BuildingService } from './building.service';
import { BuildingController } from './building.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Building])],
  exports: [BuildingService],
  controllers: [BuildingController],
  providers: [BuildingService],
})
export class BuildingModule {}
