import type { EditExerciseSetById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ExerciseSetForm from 'src/components/ExerciseSet/ExerciseSetForm'

export const QUERY = gql`
  query EditExerciseSetById($id: Int!) {
    exerciseSet: exerciseSet(id: $id) {
      id
      name
      sortOrder
      createdAt
      updatedAt
    }
  }
`
const UPDATE_exercise_set_MUTATION = gql`
  mutation UpdateExerciseSetMutation(
    $id: Int!
    $input: UpdateExerciseSetInput!
  ) {
    updateExerciseSet(id: $id, input: $input) {
      id
      name
      sortOrder
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
  exerciseSet,
}: CellSuccessProps<EditExerciseSetById>) => {
  const [updateExerciseSet, { loading, error }] = useMutation(
    UPDATE_exercise_set_MUTATION,
    {
      onCompleted: () => {
        toast.success('ExerciseSet updated')
        navigate(routes.exerciseSets())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateExerciseSet({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ExerciseSet {exerciseSet.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ExerciseSetForm
          exerciseSet={exerciseSet}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
