import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Difficulty/DifficultiesCell'

const DELETE_DIFFICULTY_MUTATION = gql`
  mutation DeleteDifficultyMutation($id: Int!) {
    deleteDifficulty(id: $id) {
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

const DifficultiesList = ({ difficulties }) => {
  const [deleteDifficulty] = useMutation(DELETE_DIFFICULTY_MUTATION, {
    onCompleted: () => {
      toast.success('Difficulty deleted')
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
    if (confirm('Are you sure you want to delete difficulty ' + id + '?')) {
      deleteDifficulty({ variables: { id } })
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
            <th>Multiplier</th>
            <th>Target reps</th>
            <th>Target sets</th>
            <th>Image url</th>
            <th>Description</th>
            <th>Exercise id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {difficulties.map((difficulty) => (
            <tr key={difficulty.id}>
              <td>{truncate(difficulty.id)}</td>
              <td>{truncate(difficulty.name)}</td>
              <td>{truncate(difficulty.sortOrder)}</td>
              <td>{truncate(difficulty.multiplier)}</td>
              <td>{truncate(difficulty.targetReps)}</td>
              <td>{truncate(difficulty.targetSets)}</td>
              <td>{truncate(difficulty.imageUrl)}</td>
              <td>{truncate(difficulty.description)}</td>
              <td>{truncate(difficulty.exerciseId)}</td>
              <td>{timeTag(difficulty.createdAt)}</td>
              <td>{timeTag(difficulty.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.difficulty({ id: difficulty.id })}
                    title={'Show difficulty ' + difficulty.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDifficulty({ id: difficulty.id })}
                    title={'Edit difficulty ' + difficulty.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete difficulty ' + difficulty.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(difficulty.id)}
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

export default DifficultiesList
