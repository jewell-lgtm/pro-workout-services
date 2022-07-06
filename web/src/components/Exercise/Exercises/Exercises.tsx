import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Exercise/ExercisesCell'

const DELETE_EXERCISE_MUTATION = gql`
  mutation DeleteExerciseMutation($id: Int!) {
    deleteExercise(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

// const jsonTruncate = (obj) => {
//   return truncate(JSON.stringify(obj, null, 2))
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

const ExercisesList = ({ exercises }) => {
  const [deleteExercise] = useMutation(DELETE_EXERCISE_MUTATION, {
    onCompleted: () => {
      toast.success('Exercise deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete exercise ' + id + '?')) {
      deleteExercise({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Sort order</th>
            <th>Exercise plan id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <tr key={exercise.id}>
              <td>{truncate(exercise.id)}</td>
              <td>{truncate(exercise.name)}</td>
              <td>{truncate(exercise.sortOrder)}</td>
              <td>{truncate(exercise.exerciseSetId)}</td>
              <td>{timeTag(exercise.createdAt)}</td>
              <td>{timeTag(exercise.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.exercise({ id: exercise.id })}
                    title={'Show exercise ' + exercise.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editExercise({ id: exercise.id })}
                    title={'Edit exercise ' + exercise.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete exercise ' + exercise.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(exercise.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExercisesList
