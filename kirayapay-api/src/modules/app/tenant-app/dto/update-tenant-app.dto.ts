import { PartialType } from '@nestjs/swagger';
import { CreateTenantAppDto } from './create-tenant-app.dto';

export class UpdateTenantAppDto extends PartialType(CreateTenantAppDto) {}
