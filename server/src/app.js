/* eslint-disable no-process-exit */
/* eslint-disable no-console */

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import { graphqlHTTP } from 'express-graphql';

import settings from './config';
import { schema } from './schema';

import { CreateDbConnection } from './utils/dbUtils';

const app = express();

// HTTP Stuff
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(cors({ origin: '*' }));
app.use(cors());

CreateDbConnection(settings.db.host, settings.db.port, settings.db.name);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// GraphQL
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.disable('x-powered-by');

const httpServer = http.Server(app);

// Server main functionality
httpServer.listen(settings.serverPort, () => {
  console.log(`Server is up and running on ${settings.serverPort} port`);
});
