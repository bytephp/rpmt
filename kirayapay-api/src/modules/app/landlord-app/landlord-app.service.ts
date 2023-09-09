import { Injectable } from '@nestjs/common';
import { CreateLandlordAppDto } from './dto/create-landlord-app.dto';
import { UpdateLandlordAppDto } from './dto/update-landlord-app.dto';

@Injectable()
export class LandlordAppService {
  create(createLandlordAppDto: CreateLandlordAppDto) {
    return 'This action adds a new landlordApp';
  }

  findAll() {
    return `This action returns all landlordApp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} landlordApp`;
  }

  update(id: number, updateLandlordAppDto: UpdateLandlordAppDto) {
    return `This action updates a #${id} landlordApp`;
  }

  remove(id: number) {
    return `This action removes a #${id} landlordApp`;
  }
}
