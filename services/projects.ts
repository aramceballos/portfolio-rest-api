import MongoLib from '../lib/mongo';

class ProjectsService {
  private mongoDB: MongoLib;
  private collection: string;

  constructor() {
    this.collection = 'projects';
    this.mongoDB = new MongoLib();
  }

  public async getProjects() {
    const data = await this.mongoDB.getAll(this.collection);

    return data;
  }

  public async getProject({ projectId }: { projectId: string }) {
    const data = await this.mongoDB.get(this.collection, projectId);

    return data;
  }
}

export default ProjectsService;
