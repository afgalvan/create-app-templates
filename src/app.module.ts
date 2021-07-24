import { Module } from '@nestjs/common';

import { port } from './config/defaults.json';
import { HomeModule } from './home/home.module';
import { SwaggerBuilder } from './swagger/swagger.builder';

@Module({
  imports: [SwaggerBuilder, HomeModule],
})
export class AppModule {
  static readonly port: number | string = process.env.PORT || port;
}
