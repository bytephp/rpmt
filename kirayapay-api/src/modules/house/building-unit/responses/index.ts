import { SerializeOptions } from '@nestjsx/crud';
import { GetBuildingUnitResponseDto } from './get-building-unit-response.dto';

export const serialize: SerializeOptions = {
  get: GetBuildingUnitResponseDto,
};
