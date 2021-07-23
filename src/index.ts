import express from 'express';

import { App } from './app';

const app = new App(express());
app.start(() => console.log(`Server on port ${app.port}`));
