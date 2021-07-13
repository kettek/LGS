import { ObjectType, Field } from "type-graphql"

import Workout from "./Workout";

@ObjectType()
export default class User {
  @Field(type => [Workout])
  workouts: Workout[]

  constructor(workouts: Workout[]) {
    this.workouts = workouts
  }
};