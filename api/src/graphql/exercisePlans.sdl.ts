export const schema = gql`
  type ExerciseSet {
    id: Int!
    name: String!
    sortOrder: Int!
    exercises: [Exercise!]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    exerciseSets: [ExerciseSet!]! @requireAuth
    exerciseSet(id: Int!): ExerciseSet @requireAuth
  }

  input CreateExerciseSetInput {
    name: String!
    sortOrder: Int!
  }

  input UpdateExerciseSetInput {
    name: String
    sortOrder: Int
  }

  type Mutation {
    createExerciseSet(input: CreateExerciseSetInput!): ExerciseSet! @requireAuth
    updateExerciseSet(id: Int!, input: UpdateExerciseSetInput!): ExerciseSet!
      @requireAuth
    deleteExerciseSet(id: Int!): ExerciseSet! @requireAuth
  }
`
