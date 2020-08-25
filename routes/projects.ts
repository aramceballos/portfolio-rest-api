import express from 'express';
import ProjectsService from '../services/projects';

const projectsApi = (app: express.Application) => {
  const router = express.Router();

  app.use('/api/projects', router);

  const projectsService = new ProjectsService();

  router.get('/', async (_req, res, next) => {
    try {
      const data = await projectsService.getProjects();

      res.status(200).json({
        data,
        message: 'projects listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:projectId', async (req, res, next) => {
    const { projectId } = req.params;

    try {
      const data = await projectsService.getProject({ projectId });

      res.status(200).json({
        data,
        message: 'project retrieved',
      });
    } catch (error) {
      next(error);
    }
  });
};

export default projectsApi;
