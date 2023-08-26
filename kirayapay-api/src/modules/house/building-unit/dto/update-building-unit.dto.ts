import { PartialType } from '@nestjs/swagger';
import { CreateBuildingUnitDto } from './create-building-unit.dto';

export class UpdateBuildingUnitDto extends PartialType(CreateBuildingUnitDto) {}
