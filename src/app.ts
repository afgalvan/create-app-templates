import './controllers';

import cors from 'cors';
import express from 'express';
import * as http from 'http';
import morgan from 'morgan';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { Server } from 'typescript-rest';

import { port } from './config/app.json';
import { options } from './swagger';

export class App {
  private app: express.Application;
  readonly port: string | number;
  private server?: http.Server;

  constructor(app: express.Application) {
    this.app = app;
    this.port = process.env.PORT || port;
    this.loadServices();
  }

  start(callback?: () => void): void {
    this.app.set('port', this.port);
    this.server = this.app.listen(this.port);

    if (callback) {
      callback();
    }
  }

  private loadServices(): void {
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());

    const specs = swaggerJsDoc(options);
    this.app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

    Server.buildServices(this.app);
  }

  close(): void {
    this.server?.close();
  }

  public get httpServer(): http.Server | undefined {
    return this.server;
  }
}
