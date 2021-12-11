import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      // { name: Author.name, schema: AuthorSchema },
      // { name: Post.name, schema: PostSchema },
    ]),
  ],
  providers: [
    // AuthorsService,
    // PostsService,
    // AuthorsResolver,
  ],
  //   exports: [CatService],
})
export class DogModule {}
