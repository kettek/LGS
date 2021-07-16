import { Field, InterfaceType } from "type-graphql";

import { ActionType } from "../enums/actionType";
import UniqueID from "./UniqueID";

@InterfaceType({ implements: UniqueID })
export default abstract class Action extends UniqueID {
  @Field(type => ActionType)
  actionType?: ActionType;

  @Field()
  exercise?: string; // I think we want to attach some sort of refrence to exercise, even for resting
}