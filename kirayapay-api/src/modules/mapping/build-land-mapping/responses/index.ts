import { SerializeOptions } from '@nestjsx/crud';
import { GetBuildLandMappingDto } from './get-build-land-mapping-response.dto';

export const serialize: SerializeOptions = {
  get: GetBuildLandMappingDto,
};
