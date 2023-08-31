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

import { Building } from './entities/building.entity';
import { BuildingService } from './building.service';
import { serialize } from './responses';

@Crud({
  model: {
    type: Building
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
    
  },
  query: {
    alwaysPaginate: true,
    softDelete: true,
    allow: ['name', 'description', "buildingType", "unitsAvailable","project", "buildingStatus", "developer", "minPrice.price","maxPrice.price", "address.locality", "address.area", "address.completeAddress", "address.latitude", "address.longitude", "address.city", "address.country", "address.street", "address.pincode", 'startDate', 'projectType', 'developer', 'minPrice', 'building', 'addressPincode'],
    join: {
      project: {
        eager: true,
        alias: 'project',
        // allow: ['name', 'id', "description", "address.doorNo", "address.locality", "address.area", "address.completeAddress", "address.latitude", "address.longitude", "address.city", "address.country", "address.street", "address.zipCode"],
        // exclude: ['createdAt', 'updatedAt', 'deletedAt'],
      }
    }
  },
})
@ApiTags('Building')
@Controller('building')
export class BuildingController implements CrudController<Building> {
  constructor(public service: BuildingService) { }

  get base(): CrudController<Building> {
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
    @ParsedBody() dto: Building,
  ) {
    const { value: projectId } = req.parsed.paramsFilter.find((f) => f.field === 'projectId');
    if (projectId) {
      dto.project = projectId;
    }
    return this.base.createOneBase(req, dto);
  }

  @Override()
  createMany(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateManyDto<Building>
  ) {
    return this.base.createManyBase(req, dto);
  }

  @Override('updateOneBase')
  coolFunction(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Building,
  ) {
    return this.base.updateOneBase(req, dto);
  }

  @Override('replaceOneBase')
  awesomePUT(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Building,
  ) {
    return this.base.replaceOneBase(req, dto);
  }
}
