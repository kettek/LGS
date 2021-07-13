import { Query, Resolver } from "type-graphql";
import { ActionUnion } from "../../shared/classes/Actions";
import { user } from "../data/user";

@Resolver()
export default class ActionResolver {
  @Query(returns => [ActionUnion])
  async actions() {
    return user.workouts[0].actions;
  }
}