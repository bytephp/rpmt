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

import { LandTenantMapping } from './entities/land-tenant-mapping.entity';
import { LandTenantMappingService } from './land-tenant-mapping.service';
import { serialize } from './responses';

@Crud({
  model: {
    type: LandTenantMapping
  },
  serialize,
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
  routes: {
    // only: ["getOneBase", "updateOneBase", "createOneBase", "getManyBase", "deleteOneBase"],

    deleteOneBase: {
      returnDeleted: false,
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
    allow: ['buildingUnit', 'landlord', 'id'],
    join: {
      buildingUnit: {
        eager: true,
        alias: 'buildingUnit',
        exclude: ['createdAt', 'updatedAt', 'deletedAt'],
      },
      landlord: {
        eager: true,
        alias: 'landlord',
        exclude: ['createdAt', 'updatedAt', 'deletedAt'],
      },
      // project: {
      //   eager: true,
      //   alias: 'project',
      //   allow: ['name', 'id', "description", "address.doorNo", "address.locality", "address.area", "address.completeAddress", "address.latitude", "address.longitude", "address.city", "address.country", "address.street", "address.zipCode"],
      //   exclude: ['createdAt', 'updatedAt', 'deletedAt'],
      // }
    }
  },
})
@ApiTags('Landlord Tenant Mapping')
@Controller('lt-mapping')
export class LandTenantMappingController implements CrudController<LandTenantMapping> {
  constructor(public service: LandTenantMappingService) { }

  get base(): CrudController<LandTenantMapping> {
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
    @ParsedBody() dto: LandTenantMapping,
  ) {
    return this.base.createOneBase(req, dto);
  }

  @Override()
  createMany(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateManyDto<LandTenantMapping>
  ) {
    return this.base.createManyBase(req, dto);
  }

  @Override('updateOneBase')
  coolFunction(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: LandTenantMapping,
  ) {
    return this.base.updateOneBase(req, dto);
  }

  @Override('replaceOneBase')
  awesomePUT(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: LandTenantMapping,
  ) {
    return this.base.replaceOneBase(req, dto);
  }
}
