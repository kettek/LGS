import { Query, Resolver } from "type-graphql";
import { ActionUnion } from "../../shared/classes/Actions";
import { user } from "../data/user";

@Resolver()
export default class ActionResolver {
  private mockedActions: Array<typeof ActionUnion> = user.workouts[0].actions;

  @Query(returns => [ActionUnion])
  async actions(): Promise<Array<typeof ActionUnion>> {
    console.log('Queried');
    return await this.mockedActions;
  }
}