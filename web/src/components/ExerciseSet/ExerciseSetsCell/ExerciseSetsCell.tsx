import type { FindExerciseSets } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ExerciseSets from 'src/components/ExerciseSet/ExerciseSets'

export const QUERY = gql`
  query FindExerciseSets {
    exerciseSets {
      id
      name
      sortOrder
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No exerciseSets yet. '}
      <Link to={routes.newExerciseSet()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  exerciseSets,
}: CellSuccessProps<FindExerciseSets>) => {
  return <ExerciseSets exerciseSets={exerciseSets} />
}
