export const schema = gql`
  type ExercisePlan {
    id: Int!
    name: String!
    sortOrder: Int!
    exercises: [Exercise]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    exercisePlans: [ExercisePlan!]! @requireAuth
    exercisePlan(id: Int!): ExercisePlan @requireAuth
  }

  input CreateExercisePlanInput {
    name: String!
    sortOrder: Int!
  }

  input UpdateExercisePlanInput {
    name: String
    sortOrder: Int
  }

  type Mutation {
    createExercisePlan(input: CreateExercisePlanInput!): ExercisePlan!
      @requireAuth
    updateExercisePlan(
      id: Int!
      input: UpdateExercisePlanInput!
    ): ExercisePlan! @requireAuth
    deleteExercisePlan(id: Int!): ExercisePlan! @requireAuth
  }
`
