import { Query } from '@nestjs/common';
import { Resolver, Args, ResolveField, Parent } from '@nestjs/graphql';
// import { Dog } from './model/dog.model';
import { Author } from './schemas/author.schema';
import { Post } from './model/post.model';
// import { DogService } from './dog.service';
import { AuthorsService /*, PostsService*/ } from './dog.service';
import { PostsService } from './post.service';

// @Resolver((of) => Dog)
// export class DogResolver {
//   constructor(private dogService: DogService) {}

//   @Query((returns) => Dog)
//   async dog(@Args('id', { type: () => Int }) id: number) {
//     return this.dogService.findOneById(id);
//   }

//   //   @ResolveField()
//   //   async posts
// }

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query(() => Author, { name: 'author' })
  async getAuthor(
    @Args('id', { type: () => Number }) id: number,
    // @Args('firstName', { nullable: true }) firstName?: string,
    // @Args('lastName', { defaultValue: '' }) lastName?: string,
  ) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField('posts', () => [Post])
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.getPosts({ authorId: id });
  }
}
