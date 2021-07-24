import { Test, TestingModule } from '@nestjs/testing';

import { HomeController } from './home.controller';

describe('HomeController', () => {
  let controller: HomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
    }).compile();

    controller = module.get<HomeController>(HomeController);
  });

  it('should return the ApiManifest', async () => {
    const status = await controller.getStatus();
    expect(status).toStrictEqual({
      status: 'OK',
      isOn: true,
      documentation: new URL('http://localhost:8000/docs'),
      repository: new URL('https://github.com/afgalvan/create-app-templates'),
    });
  });
});
