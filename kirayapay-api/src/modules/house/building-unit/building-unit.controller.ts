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

import { BuildingUnit } from './entities/building-unit.entity';
import { BuildingUnitService } from './building-unit.service';
import { serialize } from './responses';

@Crud({
  model: {
    type: BuildingUnit
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
    deleteOneBase: {
      returnDeleted: false,
    },
  },
  query: {
    alwaysPaginate: true,
    softDelete: true,
    allow: ['name', 'description', "buildingType", "unitsAvailable", "project", "buildingStatus", "developer", "minPrice.price", "maxPrice.price", "address.locality", "address.area", "address.completeAddress", "address.latitude", "address.longitude", "address.city", "address.country", "address.street", "address.pincode", 'startDate', 'projectType', 'developer', 'minPrice', 'building', 'addressPincode'],
    join: {
      //   users: {
      //     alias: 'companyUsers',
      //     exclude: ['email'],
      //     eager: true,
      //   },
      //   'users.projects': {
      //     eager: true,
      //     alias: 'usersProjects',
      //     allow: ['name'],
      //   },
      //   'users.projects.company': {
      //     eager: true,
      //     alias: 'usersProjectsCompany',
      //   },
      building: {
        eager: true,
        alias: 'building',
      },
      project: {
        eager: true,
        alias: 'project',
      },
    },
  },
})
@ApiTags('Building Unit')
@Controller('building-unit')

export class BuildingUnitController implements CrudController<BuildingUnit> {
  constructor(public readonly service: BuildingUnitService) { }

  get base(): CrudController<BuildingUnit> {
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
    @ParsedBody() dto: BuildingUnit,
  ) {
    const { value: buildingId } = req.parsed.paramsFilter.find((f) => f.field === 'buildingId');
    if (buildingId) {
      dto.building = buildingId;
    }
    return this.base.createOneBase(req, dto);
  }

  @Override()
  createMany(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateManyDto<BuildingUnit>
  ) {
    return this.base.createManyBase(req, dto);
  }

  @Override('updateOneBase')
  coolFunction(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: BuildingUnit,
  ) {
    return this.base.updateOneBase(req, dto);
  }

  @Override('replaceOneBase')
  awesomePUT(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: BuildingUnit,
  ) {
    return this.base.replaceOneBase(req, dto);
  }
}
