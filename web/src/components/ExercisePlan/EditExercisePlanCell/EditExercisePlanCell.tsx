import type { EditExercisePlanById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ExercisePlanForm from 'src/components/ExercisePlan/ExercisePlanForm'

export const QUERY = gql`
  query EditExercisePlanById($id: Int!) {
    exercisePlan: exercisePlan(id: $id) {
      id
      name
      sortOrder
      createdAt
      updatedAt
    }
  }
`
const UPDATE_EXERCISE_PLAN_MUTATION = gql`
  mutation UpdateExercisePlanMutation(
    $id: Int!
    $input: UpdateExercisePlanInput!
  ) {
    updateExercisePlan(id: $id, input: $input) {
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
  exercisePlan,
}: CellSuccessProps<EditExercisePlanById>) => {
  const [updateExercisePlan, { loading, error }] = useMutation(
    UPDATE_EXERCISE_PLAN_MUTATION,
    {
      onCompleted: () => {
        toast.success('ExercisePlan updated')
        navigate(routes.exercisePlans())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateExercisePlan({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ExercisePlan {exercisePlan.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ExercisePlanForm
          exercisePlan={exercisePlan}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
