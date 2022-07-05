export const schema = gql`
  type User {
    id: Int!
    firebaseId: String!
    name: String!
    picture: String!
    email: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
    currentUser: User! @requireAuth
  }

  input CreateUserInput {
    firebaseId: String!
    name: String!
    picture: String!
    email: String!
  }

  input UpdateUserInput {
    firebaseId: String
    name: String
    picture: String
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
