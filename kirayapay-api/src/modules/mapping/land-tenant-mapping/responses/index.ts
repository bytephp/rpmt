import { SerializeOptions } from '@nestjsx/crud';
import { GetLandTenantMappingDto } from './get-land-tenant-mapping-response.dto';

export const serialize: SerializeOptions = {
  get: GetLandTenantMappingDto,
};
