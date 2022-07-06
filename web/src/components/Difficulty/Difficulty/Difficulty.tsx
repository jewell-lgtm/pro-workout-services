import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_DIFFICULTY_MUTATION = gql`
  mutation DeleteDifficultyMutation($id: Int!) {
    deleteDifficulty(id: $id) {
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

const Difficulty = ({ difficulty }) => {
  const [deleteDifficulty] = useMutation(DELETE_DIFFICULTY_MUTATION, {
    onCompleted: () => {
      toast.success('Difficulty deleted')
      navigate(routes.difficulties())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete difficulty ' + id + '?')) {
      deleteDifficulty({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Difficulty {difficulty.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{difficulty.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{difficulty.name}</td>
            </tr>
            <tr>
              <th>Sort order</th>
              <td>{difficulty.sortOrder}</td>
            </tr>
            <tr>
              <th>Multiplier</th>
              <td>{difficulty.multiplier}</td>
            </tr>
            <tr>
              <th>Target reps</th>
              <td>{difficulty.targetReps}</td>
            </tr>
            <tr>
              <th>Target sets</th>
              <td>{difficulty.targetSets}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{difficulty.imageUrl}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{difficulty.description}</td>
            </tr>
            <tr>
              <th>Exercise id</th>
              <td>{difficulty.exerciseId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(difficulty.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(difficulty.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDifficulty({ id: difficulty.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(difficulty.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Difficulty
