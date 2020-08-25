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

  public getProject({ projectId }: { projectId: string }) {
    const data = {
      id: projectId,
      title: 'Test',
      description: 'Description test',
    };

    return Promise.resolve(data);
  }
}

export default ProjectsService;
