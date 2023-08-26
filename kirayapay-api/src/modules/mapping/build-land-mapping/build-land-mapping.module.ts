import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BuildLandMapping } from './entities/build-land-mapping.entity';
import { BuildLandMappingService } from './build-land-mapping.service';
import { BuildLandMappingController } from './build-land-mapping.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BuildLandMapping])],
  exports: [BuildLandMappingService],
  controllers: [BuildLandMappingController],
  providers: [BuildLandMappingService],
})
export class BuildLandMappingModule {}
