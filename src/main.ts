import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { SwaggerBuilder } from './swagger/swagger.builder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerBuilder = await app.resolve(SwaggerBuilder);

  swaggerBuilder.buildSwaggerUI(app);
  app.enableCors();

  await app.listen(AppModule.port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
