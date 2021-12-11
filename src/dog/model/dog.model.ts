import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'dog' })
export class Dog {
  @Field({ description: 'object id' })
  _id: string;

  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  //   @Field((type) => [String])
  //   ingredients: string[];
}
