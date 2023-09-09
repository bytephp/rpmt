import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenantAppService } from './tenant-app.service';
import { CreateTenantAppDto } from './dto/create-tenant-app.dto';
import { UpdateTenantAppDto } from './dto/update-tenant-app.dto';

@Controller('tenant-app')
export class TenantAppController {
  constructor(private readonly tenantAppService: TenantAppService) {}

  @Post()
  create(@Body() createTenantAppDto: CreateTenantAppDto) {
    return this.tenantAppService.create(createTenantAppDto);
  }

  @Get()
  findAll() {
    return this.tenantAppService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tenantAppService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTenantAppDto: UpdateTenantAppDto) {
    return this.tenantAppService.update(+id, updateTenantAppDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tenantAppService.remove(+id);
  }
}
