import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SuperAdmin } from './entities/super-admin.entity';
import { SuperAdminService } from './super-admin.service';
import { SuperAdminController } from './super-admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SuperAdmin])],
  exports: [SuperAdminService],
  controllers: [SuperAdminController],
  providers: [SuperAdminService],
})
export class SuperAdminModule { }
