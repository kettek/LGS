import { ID as gqlID, Field, InterfaceType } from "type-graphql";

@InterfaceType()
export default abstract class UniqueID {
  @Field(type => gqlID)
  id?: string; // id is a UUID.
}