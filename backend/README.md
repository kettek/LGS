# LGS Backend

## Install

`npm install`

## Run

`npm run start`

## Schema

Schema is generated to src/schema/

## Query

You can navigate to localhost:4000 to view the GraphQL UI.

Here's a sample query that retrieves some information from the mocked data

```graphql
query {
  actions {
    __typename
    ... on Action {
      id
      actionType
      exercise
    }
  }
}
```
