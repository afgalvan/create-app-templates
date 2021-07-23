import './controllers';

import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { Server } from 'typescript-rest';

import { port } from './config/app.json';
import { options } from './swagger';

const app: express.Application = express();

app.set('port', process.env.PORT || port);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const specs = swaggerJsDoc(options);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

Server.buildServices(app);

export default app;
