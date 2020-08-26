import MongoLib from '../lib/mongo';

type TCertificate = {
  _id: string;
  name: string;
  src: string;
};

class CertificatesService {
  private collection: string;
  private mongoDB: MongoLib;

  constructor() {
    this.collection = 'certificates';
    this.mongoDB = new MongoLib();
  }

  public async getCertificates(): Promise<TCertificate[]> {
    const certificates = await this.mongoDB.getAll(this.collection);

    return certificates;
  }

  public async getCertificate({
    certificateId,
  }: {
    certificateId: string;
  }): Promise<TCertificate> {
    const certificate = await this.mongoDB.get(this.collection, certificateId);

    return certificate;
  }
}

export default CertificatesService;
