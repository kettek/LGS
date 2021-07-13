import { ObjectType, Field } from "type-graphql"

import { 
  ActionAerobic,
  ActionAnaerobic,
  ActionFlexibility,
  ActionRest,
  ActionUnion
} from "./Actions"

@ObjectType()
export default class Workout {
  @Field(type => [ActionUnion])
  actions: (ActionAerobic|ActionAnaerobic|ActionFlexibility|ActionRest)[] = [];
}