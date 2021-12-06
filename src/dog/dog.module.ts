import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
// import { CatController } from './cat.controller';
// import { CatService } from './cat.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Cat, CatSchema } from './schemata/cat.schema';

@Module({
  imports: [
    // GraphQLModule.forRoot({}),
    //   MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])
  ],
  //   controllers: [CatController],
  //   providers: [CatService],
  //   exports: [CatService],
})
export class DogModule {}
