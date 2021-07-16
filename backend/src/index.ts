import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { buildSchema } from 'type-graphql';
import ActionResolver from "./mock/resolvers/actions";

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  // ... Building schema here
  const schema = await buildSchema({
    resolvers: [ActionResolver],
    emitSchemaFile: "./src/schema/schema.gql",
  });
  // Create GraphQL server
  const server = new ApolloServer({
    schema,
    introspection: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground,
    ]
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();