import * as mongoose from 'mongoose';

export const dbProviders = [
  {
    provide: 'DB_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.me6z7.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`,
      ),
  },
];
