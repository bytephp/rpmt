import { PartialType } from '@nestjs/swagger';
import { CreateLandTenantMappingDto } from './create-land-tenant-mapping.dto';

export class UpdateLandTenantMappingDto extends PartialType(CreateLandTenantMappingDto) {}
