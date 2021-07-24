import swaggerJSDoc from 'swagger-jsdoc';

import { description, version } from '../../package.json';
import { port } from './app.json';

export const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Template API',
      version: version,
      description: description,
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || port}`,
      },
    ],
  },
  apis: ['./src/controllers/*controller.ts'],
};
