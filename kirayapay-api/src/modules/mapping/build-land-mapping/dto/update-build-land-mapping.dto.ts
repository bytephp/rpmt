import { PartialType } from '@nestjs/swagger';
import { CreateBuildLandMappingDto } from './create-build-land-mapping.dto';

export class UpdateBuildLandMappingDto extends PartialType(CreateBuildLandMappingDto) {}
