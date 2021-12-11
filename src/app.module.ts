import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';
import { GraphQLModule } from '@nestjs/graphql';
// import { DatabaseModule } from './dbconfig/db.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
// import { join } from 'path/posix';
// import { AppController } from './cat/cat.controller';
// import { AppService } from './cat/cat.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.me6z7.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`,
      }),
    }),
    GraphQLModule.forRootAsync({
      useFactory: () => {
        return {
          autoSchemaFile: './graphql-schema.gql',
          // introspection: true,
          // installSubscriptionHandlers: true,
          playground: true,
          // debug: true,
          // include: [DogModule],
        };
      },
    }),
    // CatModule,
    DogModule,
  ],
  // DatabaseModule,
  // MongooseModule.forRoot(
  //   `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.me6z7.mongodb.net/sontag?retryWrites=true&w=majority`,
  // ),
  // 'mongodb://localhost:27017/sontag',
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
