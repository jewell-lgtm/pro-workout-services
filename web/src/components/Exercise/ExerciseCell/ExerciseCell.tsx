import type { FindExerciseById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Exercise from 'src/components/Exercise/Exercise'

export const QUERY = gql`
  query FindExerciseById($id: Int!) {
    exercise: exercise(id: $id) {
      id
      name
      sortOrder
      exerciseSetId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Exercise not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ exercise }: CellSuccessProps<FindExerciseById>) => {
  return <Exercise exercise={exercise} />
}
