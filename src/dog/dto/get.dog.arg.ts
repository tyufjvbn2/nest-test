import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetDogArgs {
  @Field()
  id?: number;
}
