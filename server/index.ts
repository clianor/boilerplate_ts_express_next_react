import express, { Request, Response } from 'express';
import next from 'next';
import mongoose from 'mongoose';
import { applyMiddleware } from './utils';
import middleware from './middleware';
import routes from './services';
import errorHandlers from './middleware/errorHandlers';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  mongoose.Promise = global.Promise;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  };

  mongoose
    .connect(process.env.MONGOURL || '', options)
    .then(() => console.log('Successfully connected to mongodb'))
    .catch((e: Error) => console.error(e));

  const server = express();

  applyMiddleware(middleware, server);
  server.use('/api', routes);

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  applyMiddleware(errorHandlers, server);

  server.listen(port, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
  });
});
