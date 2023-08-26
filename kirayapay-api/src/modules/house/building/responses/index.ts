import { SerializeOptions } from '@nestjsx/crud';
import { GetBuildingResponseDto } from './get-building-response.dto';

export const serialize: SerializeOptions = {
  get: GetBuildingResponseDto,
};
