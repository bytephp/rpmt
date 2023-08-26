import { SerializeOptions } from '@nestjsx/crud';
import { GetSuperAdminResponseDto } from './get-super-admin-response.dto';

export const serialize: SerializeOptions = {
  get: GetSuperAdminResponseDto,
};
