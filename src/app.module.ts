import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
// import { DatabaseModule } from './dbconfig/db.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
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
    CatModule,
  ],
  // MongooseModule.forRoot(
  //   `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.me6z7.mongodb.net/sontag?retryWrites=true&w=majority`,
  // ),
  // 'mongodb://localhost:27017/sontag',
  // DatabaseModule,
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
