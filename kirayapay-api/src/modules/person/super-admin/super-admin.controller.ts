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

import { SuperAdmin } from './entities/super-admin.entity';
import { SuperAdminService } from './super-admin.service';
import { serialize } from './responses';

@Crud({
  model: {
    type: SuperAdmin
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
@ApiTags('Super Admin')
@Controller('super-admin')
export class SuperAdminController implements CrudController<SuperAdmin>{
  constructor(public service: SuperAdminService) { }

  get base(): CrudController<SuperAdmin> {
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
    @ParsedBody() dto: SuperAdmin,
  ) {
    return this.base.createOneBase(req, dto);
  }

  @Override()
  createMany(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateManyDto<SuperAdmin>
  ) {
    return this.base.createManyBase(req, dto);
  }

  @Override('updateOneBase')
  coolFunction(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: SuperAdmin,
  ) {
    return this.base.updateOneBase(req, dto);
  }

  @Override('replaceOneBase')
  awesomePUT(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: SuperAdmin,
  ) {
    return this.base.replaceOneBase(req, dto);
  }
}
