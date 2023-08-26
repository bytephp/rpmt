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

import { Project } from './entities/project.entity';
import { ProjectService } from './project.service';
import { serialize } from './responses';

@Crud({
  model: {
    type: Project
  },
  serialize,
  routes: {
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
    allow: ['name', 'description', "address.doorNo", "address.locality", "address.area", "address.completeAddress", "address.latitude", "address.longitude", "address.city", "address.country", "address.street", "address.zipCode", 'startDate', 'projectType', 'developer', 'minPrice','building','addressPincode'],
    // get address enum value from project
    join: {
      building: {
        alias: 'building',
      }
    }
  },
})
@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(public service: ProjectService) { }

  get base(): CrudController<Project> {
    return this;
  }

  @Override()
  getMany(
    @ParsedRequest() req: CrudRequest,
  ) {
    if (req.parsed.fields.length > 0) {
      req.options.query.allow = req.parsed.fields
    }
    return this.base.getManyBase(req);
  }

  @Override('getOneBase')
  getOneAndDoStuff(
    @ParsedRequest() req: CrudRequest,
  ) {
    console.log(req.parsed);

    return this.base.getOneBase(req);
  }

  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Project,
  ) {
    console.log(req);
    return this.base.createOneBase(req, dto);
  }

  @Override()
  createMany(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateManyDto<Project>
  ) {
    return this.base.createManyBase(req, dto);
  }

  @Override('updateOneBase')
  coolFunction(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Project,
  ) {
    return this.base.updateOneBase(req, dto);
  }

  @Override('replaceOneBase')
  awesomePUT(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Project,
  ) {
    return this.base.replaceOneBase(req, dto);
  }

  @Override()
  async deleteOne(
    @ParsedRequest() req: CrudRequest,
  ) {
    return this.base.deleteOneBase(req);
  }
}
