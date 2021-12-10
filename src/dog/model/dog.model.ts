import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'dog' })
export class Dog {
  @Field((type) => ID)
  id: string;

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
