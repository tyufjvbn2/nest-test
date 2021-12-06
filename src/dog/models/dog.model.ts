import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Child } from './child';

@ObjectType()
export class Dog {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field((type) => [Child])
  children: Child[];
}
