export const schema = gql`
  type Difficulty {
    id: Int!
    name: String!
    sortOrder: Int!
    multiplier: Float!
    targetReps: Int!
    targetSets: Int!
    imageUrl: String!
    description: String!
    exerciseId: Int!
    exercise: Exercise!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    difficulties: [Difficulty!]! @requireAuth
    difficulty(id: Int!): Difficulty @requireAuth
  }

  input CreateDifficultyInput {
    name: String!
    sortOrder: Int!
    multiplier: Float!
    targetReps: Int!
    targetSets: Int!
    imageUrl: String!
    description: String!
    exerciseId: Int!
  }

  input UpdateDifficultyInput {
    name: String
    sortOrder: Int
    multiplier: Float
    targetReps: Int
    targetSets: Int
    imageUrl: String
    description: String
    exerciseId: Int
  }

  type Mutation {
    createDifficulty(input: CreateDifficultyInput!): Difficulty! @requireAuth
    updateDifficulty(id: Int!, input: UpdateDifficultyInput!): Difficulty!
      @requireAuth
    deleteDifficulty(id: Int!): Difficulty! @requireAuth
  }
`
