import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ExerciseSetForm from 'src/components/ExerciseSet/ExerciseSetForm'

const CREATE_exercise_set_MUTATION = gql`
  mutation CreateExerciseSetMutation($input: CreateExerciseSetInput!) {
    createExerciseSet(input: $input) {
      id
    }
  }
`

const NewExerciseSet = () => {
  const [createExerciseSet, { loading, error }] = useMutation(
    CREATE_exercise_set_MUTATION,
    {
      onCompleted: () => {
        toast.success('ExerciseSet created')
        navigate(routes.exerciseSets())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createExerciseSet({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ExerciseSet</h2>
      </header>
      <div className="rw-segment-main">
        <ExerciseSetForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewExerciseSet
