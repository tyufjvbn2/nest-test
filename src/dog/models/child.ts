import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Child {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => Int, { nullable: true })
  age?: number;
}
