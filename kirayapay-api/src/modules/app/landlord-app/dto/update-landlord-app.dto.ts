import { PartialType } from '@nestjs/swagger';
import { CreateLandlordAppDto } from './create-landlord-app.dto';

export class UpdateLandlordAppDto extends PartialType(CreateLandlordAppDto) {}
