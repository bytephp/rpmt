import { Injectable } from '@nestjs/common';
import { CreateTenantAppDto } from './dto/create-tenant-app.dto';
import { UpdateTenantAppDto } from './dto/update-tenant-app.dto';

@Injectable()
export class TenantAppService {
  create(createTenantAppDto: CreateTenantAppDto) {
    return 'This action adds a new tenantApp';
  }

  findAll() {
    return `This action returns all tenantApp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tenantApp`;
  }

  update(id: number, updateTenantAppDto: UpdateTenantAppDto) {
    return `This action updates a #${id} tenantApp`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenantApp`;
  }
}
