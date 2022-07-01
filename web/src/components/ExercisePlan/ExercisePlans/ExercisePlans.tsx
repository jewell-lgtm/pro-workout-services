import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ExercisePlan/ExercisePlansCell'

const DELETE_EXERCISE_PLAN_MUTATION = gql`
  mutation DeleteExercisePlanMutation($id: Int!) {
    deleteExercisePlan(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const ExercisePlansList = ({ exercisePlans }) => {
  const [deleteExercisePlan] = useMutation(DELETE_EXERCISE_PLAN_MUTATION, {
    onCompleted: () => {
      toast.success('ExercisePlan deleted')
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
    if (confirm('Are you sure you want to delete exercisePlan ' + id + '?')) {
      deleteExercisePlan({ variables: { id } })
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
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {exercisePlans.map((exercisePlan) => (
            <tr key={exercisePlan.id}>
              <td>{truncate(exercisePlan.id)}</td>
              <td>{truncate(exercisePlan.name)}</td>
              <td>{truncate(exercisePlan.sortOrder)}</td>
              <td>{timeTag(exercisePlan.createdAt)}</td>
              <td>{timeTag(exercisePlan.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.exercisePlan({ id: exercisePlan.id })}
                    title={'Show exercisePlan ' + exercisePlan.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editExercisePlan({ id: exercisePlan.id })}
                    title={'Edit exercisePlan ' + exercisePlan.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete exercisePlan ' + exercisePlan.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(exercisePlan.id)}
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

export default ExercisePlansList
