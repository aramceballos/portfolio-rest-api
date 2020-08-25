import express from 'express';

import { envConfig } from './config';
import projectsApi from './routes/projects';

const app: express.Application = express();

projectsApi(app);

app.listen(envConfig.port, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${envConfig.port}`,
  );
});
