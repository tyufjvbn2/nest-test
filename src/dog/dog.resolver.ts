import {
  Resolver,
  Args,
  // /* ResolveField,*/ Parent,
  Query,
  // ResolveProperty,
} from '@nestjs/graphql';
import { Dog } from './model/dog.model';
import { DogService } from './dog.service';
import { GetDogArgs } from './dto/get.dog.arg';

@Resolver(() => Dog)
export class DogResolver {
  constructor(private dogService: DogService) {}

  @Query(() => Dog, { name: 'dog' })
  async getDog(@Args() Args: GetDogArgs) {
    return this.dogService.findOneById(Args.id);
  }
}
