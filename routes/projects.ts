import express from 'express';
import ProjectsService from '../services/projects';

const projectsApi = (app: express.Application) => {
  const router = express.Router();

  app.use('/api/projects', router);

  const projectsService = new ProjectsService();

  router.get('/', async (_req, res, next) => {
    try {
      const projects = await projectsService.getProjects();

      res.status(200).json({
        data: projects,
        message: 'projects listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:projectId', async (req, res, next) => {
    const { projectId } = req.params;

    try {
      const project = await projectsService.getProject({ projectId });

      res.status(200).json({
        data: project,
        message: 'project retrieved',
      });
    } catch (error) {
      next(error);
    }
  });
};

export default projectsApi;
