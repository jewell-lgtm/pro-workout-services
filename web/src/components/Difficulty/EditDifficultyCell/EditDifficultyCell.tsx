import type { EditDifficultyById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DifficultyForm from 'src/components/Difficulty/DifficultyForm'

export const QUERY = gql`
  query EditDifficultyById($id: Int!) {
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
const UPDATE_DIFFICULTY_MUTATION = gql`
  mutation UpdateDifficultyMutation($id: Int!, $input: UpdateDifficultyInput!) {
    updateDifficulty(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  difficulty,
}: CellSuccessProps<EditDifficultyById>) => {
  const [updateDifficulty, { loading, error }] = useMutation(
    UPDATE_DIFFICULTY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Difficulty updated')
        navigate(routes.difficulties())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      exerciseId: parseInt(input.exerciseId),
    })
    updateDifficulty({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Difficulty {difficulty.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DifficultyForm
          difficulty={difficulty}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
