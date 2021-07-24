import { ApiProperty } from '@nestjs/swagger';

import { ApiStatus } from './../interfaces/status.interface';

export class Status implements ApiStatus {
  @ApiProperty({ example: 'OK' })
  status!: string;
  @ApiProperty()
  isOn!: boolean;
  @ApiProperty({ example: 'https://company.com/api/docs', type: 'string(url)' })
  documentation!: URL;
  @ApiProperty({
    example: 'https://github.com/company/repository',
    type: 'string(url)',
  })
  repository!: URL;
}
