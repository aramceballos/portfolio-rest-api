import express from 'express';

import { envConfig } from './config';
import projectsApi from './routes/projects';
import certificatesApi from './routes/certificates';
import {
  logErrors,
  errorHandler,
  wrapErrors,
} from './utils/middlewares/errorHandlers';
import notFoundHandler from './utils/middlewares/notFoundHandler';

const app: express.Application = express();

//Body Parser
app.use(express.json());

// Routes
projectsApi(app);
certificatesApi(app);

// Catch 404
app.use(notFoundHandler);

// Error Handler
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(envConfig.port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${envConfig.port}`,
  );
});
