import 'reflect-metadata';

import { container } from 'tsyringe';

import { HomeController } from './home.controller';

const homeController = container.resolve(HomeController);

test('The home endpoint should return the base object response', () => {
  expect(homeController.index()).toStrictEqual({
    status: 'ok',
    version: '1.0.0',
  });
});
