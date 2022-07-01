import type { FindExercisePlanById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ExercisePlan from 'src/components/ExercisePlan/ExercisePlan'

export const QUERY = gql`
  query FindExercisePlanById($id: Int!) {
    exercisePlan: exercisePlan(id: $id) {
      id
      name
      sortOrder
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ExercisePlan not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  exercisePlan,
}: CellSuccessProps<FindExercisePlanById>) => {
  return <ExercisePlan exercisePlan={exercisePlan} />
}
