import express, { Request, Response } from 'express';
import next from 'next';
import { applyRouter, applyMiddleware } from './utils';
import middleware from './middleware';
import routes from './services';
import errorHandlers from './middleware/errorHandlers';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  applyMiddleware(middleware, server);
  applyRouter(routes, server);
  applyMiddleware(errorHandlers, server);

  server.listen(port, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
  });
});
