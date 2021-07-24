import { DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

import { swagger } from '../config/swagger';

export interface SwaggerCustomOptions extends SwaggerDocumentOptions {
  explorer?: boolean;
  customCss?: string;
  customCssUrl?: string;
  customJs?: string;
  customfavIcon?: string;
  swaggerUrl?: string;
  customSiteTitle?: string;
  validatorUrl?: string;
  url?: string;
  path: string;
  urls?: Record<'url' | 'name', string>[];
}

export const customOptions: SwaggerCustomOptions = {
  customSiteTitle: 'API Docs',
  path: swagger.basePath,
};

export const options = new DocumentBuilder()
  .setTitle(swagger.info.title)
  .setDescription(swagger.info.description)
  .setVersion(swagger.info.version)
  .setLicense(swagger.info.license, swagger.info.licenseUrl)
  .addServer(swagger.servers[0].url)
  .build();
