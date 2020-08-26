import express from 'express';

import { envConfig } from './config';
import projectsApi from './routes/projects';
import certificatesApi from './routes/certificates';
import { logErrors, errorHandler } from './utils/middlewares/errorHandlers';

const app: express.Application = express();

app.use(express.json());

projectsApi(app);
certificatesApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(envConfig.port, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${envConfig.port}`,
  );
});
