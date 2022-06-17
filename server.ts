import express from 'express';
import http, { Server } from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { createSlug } from './controllers/slugController';
import { initSocket } from './sockets';

const app = express();
const server: Server = http.createServer(app);
const port = process.env.SERVER_PORT || 8000;

app.use(cors());

initSocket(server);

app.get('/slug', (req, res, next) => {
  createSlug(req, res, next).then();
});

app.get('/test', (_, res) => {
  res.send('This works. Awesome! 😎');
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  return console.log(`Express app running on: http://localhost:${port} 🚀🔥👍`);
});
