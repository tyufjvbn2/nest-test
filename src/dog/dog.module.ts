import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Dog, DogSchema } from './schemas/dog.schema'
import { DogService } from './dog.service';
import { DogResolver } from './dog.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Dog.name, schema: DogSchema }
    ]),
  ],
  providers: [
    DogService,
    DogResolver
    // AuthorsService,
    // PostsService,
    // AuthorsResolver,
  ],
  //   exports: [CatService],
})
export class DogModule {}
