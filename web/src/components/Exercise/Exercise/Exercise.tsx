import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_EXERCISE_MUTATION = gql`
  mutation DeleteExerciseMutation($id: Int!) {
    deleteExercise(id: $id) {
      id
    }
  }
`

// const formatEnum = (values: string | string[] | null | undefined) => {
//   if (values) {
//     if (Array.isArray(values)) {
//       const humanizedValues = values.map((value) => humanize(value))
//       return humanizedValues.join(', ')
//     } else {
//       return humanize(values as string)
//     }
//   }
// }

// const jsonDisplay = (obj) => {
//   return (
//     <pre>
//       <code>{JSON.stringify(obj, null, 2)}</code>
//     </pre>
//   )
// }

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

// const checkboxInputTag = (checked) => {
//   return <input type="checkbox" checked={checked} disabled />
// }

const Exercise = ({ exercise }) => {
  const [deleteExercise] = useMutation(DELETE_EXERCISE_MUTATION, {
    onCompleted: () => {
      toast.success('Exercise deleted')
      navigate(routes.exercises())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete exercise ' + id + '?')) {
      deleteExercise({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Exercise {exercise.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{exercise.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{exercise.name}</td>
            </tr>
            <tr>
              <th>Sort order</th>
              <td>{exercise.sortOrder}</td>
            </tr>
            <tr>
              <th>Exercise plan id</th>
              <td>{exercise.exerciseSetId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(exercise.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(exercise.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editExercise({ id: exercise.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(exercise.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Exercise
