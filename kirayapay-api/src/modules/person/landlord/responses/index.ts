import { SerializeOptions } from '@nestjsx/crud';
import { GetLandlordResponseDto } from './get-landlord-response.dto';

export const serialize: SerializeOptions = {
  get: GetLandlordResponseDto,
};
