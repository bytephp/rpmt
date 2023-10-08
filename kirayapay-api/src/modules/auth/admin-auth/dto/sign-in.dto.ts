import { ApiProperty } from '@nestjs/swagger'
import { faker } from "@faker-js/faker";

export class SignInDto {
  @ApiProperty({ type: 'string', description: 'User Name', example: faker.internet.userName(), })
  username: string;

  @ApiProperty({ type: 'string', description: 'password', example: faker.internet.password(), })
  password: string;

}
