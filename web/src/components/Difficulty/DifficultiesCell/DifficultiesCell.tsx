import type { FindDifficulties } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Difficulties from 'src/components/Difficulty/Difficulties'

export const QUERY = gql`
  query FindDifficulties {
    difficulties {
      id
      name
      sortOrder
      multiplier
      targetReps
      targetSets
      imageUrl
      description
      exerciseId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No difficulties yet. '}
      <Link to={routes.newDifficulty()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  difficulties,
}: CellSuccessProps<FindDifficulties>) => {
  return <Difficulties difficulties={difficulties} />
}
