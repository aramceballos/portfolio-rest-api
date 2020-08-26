import MongoLib from '../lib/mongo';

type TProject = {
  _id: string;
  title: string;
  description?: string;
  technologies?: string[];
  src?: string;
  url?: string;
  repository?: string;
};

class ProjectsService {
  private mongoDB: MongoLib;
  private collection: string;

  constructor() {
    this.collection = 'projects';
    this.mongoDB = new MongoLib();
  }

  public async getProjects(): Promise<TProject[]> {
    const projects = await this.mongoDB.getAll(this.collection);

    return projects;
  }

  public async getProject({
    projectId,
  }: {
    projectId: string;
  }): Promise<TProject> {
    const project = await this.mongoDB.get(this.collection, projectId);

    return project;
  }
}

export default ProjectsService;
