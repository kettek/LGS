import { registerEnumType } from "type-graphql";

export enum ActionType {
  ANAEROBIC,
  AEROBIC,
  FLEXIBILITY,
  REST,
  EAT
}

registerEnumType(ActionType, {
  name: "ActionType",
  description: "The type of action performed."
});