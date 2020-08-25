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
    const data = await this.mongoDB.getAll(this.collection);

    return data;
  }

  public async getProject({
    projectId,
  }: {
    projectId: string;
  }): Promise<TProject> {
    const data = await this.mongoDB.get(this.collection, projectId);

    return data;
  }
}

export default ProjectsService;
