import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ExercisePlanForm from 'src/components/ExercisePlan/ExercisePlanForm'

const CREATE_EXERCISE_PLAN_MUTATION = gql`
  mutation CreateExercisePlanMutation($input: CreateExercisePlanInput!) {
    createExercisePlan(input: $input) {
      id
    }
  }
`

const NewExercisePlan = () => {
  const [createExercisePlan, { loading, error }] = useMutation(
    CREATE_EXERCISE_PLAN_MUTATION,
    {
      onCompleted: () => {
        toast.success('ExercisePlan created')
        navigate(routes.exercisePlans())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createExercisePlan({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ExercisePlan</h2>
      </header>
      <div className="rw-segment-main">
        <ExercisePlanForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewExercisePlan
