import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DifficultyForm from 'src/components/Difficulty/DifficultyForm'

const CREATE_DIFFICULTY_MUTATION = gql`
  mutation CreateDifficultyMutation($input: CreateDifficultyInput!) {
    createDifficulty(input: $input) {
      id
    }
  }
`

const NewDifficulty = () => {
  const [createDifficulty, { loading, error }] = useMutation(
    CREATE_DIFFICULTY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Difficulty created')
        navigate(routes.difficulties())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      exerciseId: parseInt(input.exerciseId),
    })
    createDifficulty({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Difficulty</h2>
      </header>
      <div className="rw-segment-main">
        <DifficultyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDifficulty
