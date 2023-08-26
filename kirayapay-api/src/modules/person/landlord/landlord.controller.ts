import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  Crud,
  CrudController,
  Override,
  CrudRequest,
  ParsedRequest,
  ParsedBody,
  CreateManyDto,
} from "@nestjsx/crud";

import { Landlord } from './entities/landlord.entity';
import { LandlordService } from './landlord.service';
import { serialize } from './responses';

@Crud({
  model: {
    type: Landlord
  },
  serialize,
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
  query: {
    sort: [
      {
        field: "createdAt",
        order: "DESC"
      }
    ],
    alwaysPaginate: true,
    softDelete: true,
  },
  routes: {
    deleteOneBase: {
      returnDeleted: false,
    },
  },

})
@ApiTags('Landlord')
@Controller('landlord')
export class LandlordController implements CrudController<Landlord>{
  constructor(public service: LandlordService) { }

  get base(): CrudController<Landlord> {
    return this;
  }

  @Override()
  getMany(
    @ParsedRequest() req: CrudRequest,
  ) {
    return this.base.getManyBase(req);
  }

  @Override('getOneBase')
  getOneAndDoStuff(
    @ParsedRequest() req: CrudRequest,
  ) {
    return this.base.getOneBase(req);
  }

  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Landlord,
  ) {
    return this.base.createOneBase(req, dto);
  }

  @Override()
  createMany(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateManyDto<Landlord>
  ) {
    return this.base.createManyBase(req, dto);
  }

  @Override('updateOneBase')
  coolFunction(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Landlord,
  ) {
    return this.base.updateOneBase(req, dto);
  }

  @Override('replaceOneBase')
  awesomePUT(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Landlord,
  ) {
    return this.base.replaceOneBase(req, dto);
  }
}
