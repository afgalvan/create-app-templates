import express from 'express';
import { container } from 'tsyringe';

import { App } from '../app';

export const setupDependencies = (): void => {
  container.register<App>(App, { useValue: new App(express()) });
};
