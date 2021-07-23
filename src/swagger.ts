import { description, version } from '../package.json';
import { port } from './config/app.json';

export const options = {
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
