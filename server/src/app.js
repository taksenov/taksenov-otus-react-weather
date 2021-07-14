/* eslint-disable no-process-exit */
/* eslint-disable no-console */

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import graphqlHTTP from 'express-graphql';

import settings from './config';

import { CreateDbConnection } from './utils/dbUtils';

// import * as routes from './routes';

const app = express();

// HTTP Stuff
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({ origin: '*' }));

CreateDbConnection(settings.db.host, settings.db.port, settings.db.name);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Router
// app.use('/api', routes.authRouter);

// GraphQL
app.use('/graphql', graphqlHTTP({}));

app.disable('x-powered-by');

const httpServer = http.Server(app);

// Server main functionality
httpServer.listen(settings.serverPort, () => {
  console.log(`Server is up and running on ${settings.serverPort} port`);
});
