import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LandlordAppService } from './landlord-app.service';
import { CreateLandlordAppDto } from './dto/create-landlord-app.dto';
import { UpdateLandlordAppDto } from './dto/update-landlord-app.dto';

@Controller('landlord-app')
export class LandlordAppController {
  constructor(private readonly landlordAppService: LandlordAppService) {}

  @Post()
  create(@Body() createLandlordAppDto: CreateLandlordAppDto) {
    return this.landlordAppService.create(createLandlordAppDto);
  }

  @Get()
  findAll() {
    return this.landlordAppService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.landlordAppService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLandlordAppDto: UpdateLandlordAppDto) {
    return this.landlordAppService.update(+id, updateLandlordAppDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.landlordAppService.remove(+id);
  }
}
