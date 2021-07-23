import 'reflect-metadata';

import { container } from 'tsyringe';

import { App } from './app';
import { setupDependencies } from './services/dependencyInjection';

setupDependencies();
const app = container.resolve(App);
app.start(() => console.log(`Server on port ${app.port}`));
