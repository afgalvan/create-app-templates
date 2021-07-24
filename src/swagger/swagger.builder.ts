import { INestApplication, Injectable } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';

import { customOptions, options } from './swagger.config';

@Injectable()
export class SwaggerBuilder {
  buildSwaggerUI(app: INestApplication): void {
    const document = SwaggerModule.createDocument(app, options, customOptions);
    SwaggerModule.setup(customOptions.path, app, document);
  }
}
