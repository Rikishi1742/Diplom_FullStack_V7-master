import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("UserPasswordTypeCreateInput", {
  isAbstract: true
})
export class UserPasswordTypeCreateInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  initialPassword!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;
}
