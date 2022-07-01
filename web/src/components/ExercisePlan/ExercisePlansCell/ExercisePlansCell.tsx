import type { FindExercisePlans } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ExercisePlans from 'src/components/ExercisePlan/ExercisePlans'

export const QUERY = gql`
  query FindExercisePlans {
    exercisePlans {
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
      {'No exercisePlans yet. '}
      <Link to={routes.newExercisePlan()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  exercisePlans,
}: CellSuccessProps<FindExercisePlans>) => {
  return <ExercisePlans exercisePlans={exercisePlans} />
}
