import { description, license, licenseUrl, version } from '../../package.json';
import { port } from './defaults.json';

export const swagger = {
  openapi: '3.0.0',
  basePath: '/docs',
  info: {
    title: 'Template API',
    version: version,
    description: description,
    license: license,
    licenseUrl: licenseUrl,
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || port}`,
    },
  ],
};
