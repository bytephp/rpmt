import { SerializeOptions } from '@nestjsx/crud';
import { GetTenantResponseDto } from './get-tenant-response.dto';

export const serialize: SerializeOptions = {
  get: GetTenantResponseDto,
};
