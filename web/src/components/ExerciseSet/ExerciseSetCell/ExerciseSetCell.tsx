import type { FindExerciseSetById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ExerciseSet from 'src/components/ExerciseSet/ExerciseSet'

export const QUERY = gql`
  query FindExerciseSetById($id: Int!) {
    exerciseSet: exerciseSet(id: $id) {
      id
      name
      sortOrder
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ExerciseSet not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  exerciseSet,
}: CellSuccessProps<FindExerciseSetById>) => {
  return <ExerciseSet exerciseSet={exerciseSet} />
}
