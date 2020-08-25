import { MongoClient, ObjectId } from 'mongodb';
import { envConfig } from '../config';

const USER = encodeURIComponent(envConfig.dbUser as string);
const PASSWORD = encodeURIComponent(envConfig.dbPassword as string);
const DB_NAME = envConfig.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${envConfig.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  public client: MongoClient;
  private dbName: string;
  static connection: any;

  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
    this.dbName = DB_NAME as string;
  }

  private connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((err) => {
          if (err) {
            reject(err);
          }

          console.log('Connected succesfully to mongo');
          resolve(this.client.db(this.dbName));
        });
      });
    }

    return MongoLib.connection;
  }

  public getAll(collection: string, query?: string) {
    return this.connect().then((db: any) => {
      return db.collection(collection).find(query).toArray();
    });
  }

  public get(collection: string, id: string) {
    return this.connect().then((db: any) => {
      return db.collection(collection).findOne({ _id: new ObjectId(id) });
    });
  }
}

export default MongoLib;
