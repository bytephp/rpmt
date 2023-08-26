import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LandlordService } from './landlord.service';
import { LandlordController } from './landlord.controller';
import { Landlord } from './entities/landlord.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Landlord])],
  exports: [LandlordService],
  controllers: [LandlordController],
  providers: [LandlordService],
})
export class LandlordModule {}
