import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ExerciseForm from 'src/components/Exercise/ExerciseForm'

const CREATE_EXERCISE_MUTATION = gql`
  mutation CreateExerciseMutation($input: CreateExerciseInput!) {
    createExercise(input: $input) {
      id
    }
  }
`

const NewExercise = () => {
  const [createExercise, { loading, error }] = useMutation(
    CREATE_EXERCISE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Exercise created')
        navigate(routes.exercises())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      exerciseSetId: parseInt(input.exerciseSetId),
    })
    createExercise({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Exercise</h2>
      </header>
      <div className="rw-segment-main">
        <ExerciseForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewExercise
