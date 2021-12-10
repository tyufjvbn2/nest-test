import { MinLength } from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';

// @ArgsType()
// class PaginationArgs {
//   @Field((type) => Int)
//   offset: number = 0;

//   @Field((type) => Int)
//   limit: number = 10;
// }

@ArgsType()
export class GetAuthorArgs /*extends PaginationArgs*/ {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ defaultValue: '' })
  @MinLength(3)
  lastName: string;
}
