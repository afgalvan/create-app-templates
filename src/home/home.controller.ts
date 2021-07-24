import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { Status } from './entities/status.entity';
import { ApiStatus } from './interfaces/status.interface';

@Controller()
@ApiTags('Home')
export class HomeController {
  @Get()
  @ApiResponse({
    status: 200,
    description: 'The API manifest',
    type: Status,
  })
  async getStatus(): Promise<ApiStatus> {
    return {
      status: 'OK',
      isOn: true,
      documentation: new URL('http://localhost:8000/docs'),
      repository: new URL('https://github.com/afgalvan/create-app-templates'),
    };
  }
}
