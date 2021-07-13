import "reflect-metadata";
import { ObjectType, Field, Int, Float, createUnionType } from "type-graphql";

import { ActionType } from "../enums/actionType";
import Action from "../interfaces/Action";


@ObjectType()
class ActionAerobic extends Action {
  @Field(type => ActionType)
  actionType: ActionType = ActionType.AEROBIC

  @Field(type => Float, { nullable: true })
  distance?: number      // Distance, for obvious things.

  @Field(type => Float, { nullable: true })
  duration?: number      // Duration, such as time taken for a lap.

  @Field(type => Int, { nullable: true })
  repetitions?: number   // Repetitions, for things like box jumps.

  @Field(type => Float, { nullable: true })
  weight?: number        // Weight for things like weighted jogging
}

@ObjectType()
class ActionAnaerobic extends Action {
  @Field(type => ActionType)
  actionType: ActionType = ActionType.ANAEROBIC

  @Field(type => Int, { nullable: true })
  repetitions?: number

  @Field(type => Float, { nullable: true })
  weight?: number
}

@ObjectType()
class ActionFlexibility extends Action {
  @Field(type => ActionType)
  actionType: ActionType = ActionType.FLEXIBILITY

  @Field(type => Int, { nullable: true })
  repetitions?: number

  @Field(type => Float, { nullable: true })
  weight?: number
}

@ObjectType()
class ActionRest extends Action {
  @Field(type => ActionType)
  actionType: ActionType = ActionType.REST

  @Field(type => Float, { nullable: true })
  duration?: number      // Duration, such as time taken for a lap... err... nap.
}

@ObjectType()
class ActionEat extends Action {
  @Field(type => ActionType)
  actionType: ActionType = ActionType.EAT

  @Field()
  food?: string

  @Field(type => Float, { nullable: true })
  duration?: number      // Duration, such as time taken for a lap... err... nap.
}

const ActionUnion = createUnionType({
  name: "Actions", // the name of the GraphQL union
  types: () => [ActionAerobic, ActionAnaerobic, ActionFlexibility, ActionRest] as const, // function that returns tuple of object types classes
  resolveType: value => {
    switch (value.actionType){
      case ActionType.AEROBIC:     return ActionAerobic;
      case ActionType.ANAEROBIC:   return ActionAnaerobic;
      case ActionType.FLEXIBILITY: return ActionFlexibility;
      case ActionType.REST:        return ActionRest;
      case ActionType.EAT:         return ActionEat;
      default:                     return undefined;
    }
  }
});

export {
  ActionAerobic,
  ActionAnaerobic,
  ActionFlexibility,
  ActionRest,
  ActionUnion,
}