import { SerializeOptions } from '@nestjsx/crud';
import { GetProjectResponseDto } from './get-project-response.dto';

export const serialize: SerializeOptions = {
  get: GetProjectResponseDto,
};
