import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_EXERCISE_PLAN_MUTATION = gql`
  mutation DeleteExercisePlanMutation($id: Int!) {
    deleteExercisePlan(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const ExercisePlan = ({ exercisePlan }) => {
  const [deleteExercisePlan] = useMutation(DELETE_EXERCISE_PLAN_MUTATION, {
    onCompleted: () => {
      toast.success('ExercisePlan deleted')
      navigate(routes.exercisePlans())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete exercisePlan ' + id + '?')) {
      deleteExercisePlan({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ExercisePlan {exercisePlan.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{exercisePlan.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{exercisePlan.name}</td>
            </tr>
            <tr>
              <th>Sort order</th>
              <td>{exercisePlan.sortOrder}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(exercisePlan.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(exercisePlan.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editExercisePlan({ id: exercisePlan.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(exercisePlan.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ExercisePlan
