import type { EditExerciseById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ExerciseForm from 'src/components/Exercise/ExerciseForm'

export const QUERY = gql`
  query EditExerciseById($id: Int!) {
    exercise: exercise(id: $id) {
      id
      name
      sortOrder
      exercisePlanId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_EXERCISE_MUTATION = gql`
  mutation UpdateExerciseMutation($id: Int!, $input: UpdateExerciseInput!) {
    updateExercise(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ exercise }: CellSuccessProps<EditExerciseById>) => {
  const [updateExercise, { loading, error }] = useMutation(
    UPDATE_EXERCISE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Exercise updated')
        navigate(routes.exercises())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      exercisePlanId: parseInt(input.exercisePlanId),
    })
    updateExercise({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Exercise {exercise.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ExerciseForm
          exercise={exercise}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
