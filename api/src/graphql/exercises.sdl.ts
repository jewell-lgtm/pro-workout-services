export const schema = gql`
  type Exercise {
    id: Int!
    name: String!
    sortOrder: Int!
    exerciseSetId: Int!
    exerciseSet: ExerciseSet!
    difficulties: [Difficulty!]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    exercises: [Exercise!]! @requireAuth
    exercise(id: Int!): Exercise @requireAuth
  }

  input CreateExerciseInput {
    name: String!
    sortOrder: Int!
    exerciseSetId: Int!
  }

  input UpdateExerciseInput {
    name: String
    sortOrder: Int
    exerciseSetId: Int
  }

  type Mutation {
    createExercise(input: CreateExerciseInput!): Exercise! @requireAuth
    updateExercise(id: Int!, input: UpdateExerciseInput!): Exercise!
      @requireAuth
    deleteExercise(id: Int!): Exercise! @requireAuth
  }
`
