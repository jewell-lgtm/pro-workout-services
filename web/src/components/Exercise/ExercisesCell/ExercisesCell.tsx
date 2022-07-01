import type { FindExercises } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Exercises from 'src/components/Exercise/Exercises'

export const QUERY = gql`
  query FindExercises {
    exercises {
      id
      name
      sortOrder
      exercisePlanId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No exercises yet. '}
      <Link to={routes.newExercise()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ exercises }: CellSuccessProps<FindExercises>) => {
  return <Exercises exercises={exercises} />
}
