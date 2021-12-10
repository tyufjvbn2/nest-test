import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { GetAuthorArgs } from './dto/get-author.args';
import { Author, AuthorDocument } from './schemas/author.schema';
// import { Post, PostDocument } from './schemas/post.schema';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectModel(Author.name)
    private readonly authorModel: Model<AuthorDocument>,
  ) {}
  // constructor(
  //   @Injectable(Post.name)
  //   private readonly postModel: Model<PostDocument>,
  // ) {}

  async findOneById(id: number): Promise<Author> {
    const targetAuthor = await this.authorModel.findOne({ id: id });
    return targetAuthor;
  }
}

// @Injectable()
// export class PostsService {
//   async findAll({ authorId: id }): Promise<Post[]> {
//     const postList = await this.postModel.
//     return [] as Post[];
//   }
// }
