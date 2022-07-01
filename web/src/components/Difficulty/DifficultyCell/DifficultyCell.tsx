import type { FindDifficultyById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Difficulty from 'src/components/Difficulty/Difficulty'

export const QUERY = gql`
  query FindDifficultyById($id: Int!) {
    difficulty: difficulty(id: $id) {
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

export const Empty = () => <div>Difficulty not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  difficulty,
}: CellSuccessProps<FindDifficultyById>) => {
  return <Difficulty difficulty={difficulty} />
}
