import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_exercise_set_MUTATION = gql`
  mutation DeleteExerciseSetMutation($id: Int!) {
    deleteExerciseSet(id: $id) {
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

const ExerciseSet = ({ exerciseSet }) => {
  const [deleteExerciseSet] = useMutation(DELETE_exercise_set_MUTATION, {
    onCompleted: () => {
      toast.success('ExerciseSet deleted')
      navigate(routes.exerciseSets())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete exerciseSet ' + id + '?')) {
      deleteExerciseSet({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ExerciseSet {exerciseSet.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{exerciseSet.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{exerciseSet.name}</td>
            </tr>
            <tr>
              <th>Sort order</th>
              <td>{exerciseSet.sortOrder}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(exerciseSet.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(exerciseSet.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editExerciseSet({ id: exerciseSet.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(exerciseSet.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ExerciseSet
