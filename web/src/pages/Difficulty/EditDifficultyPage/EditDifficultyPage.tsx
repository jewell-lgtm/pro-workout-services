import EditDifficultyCell from 'src/components/Difficulty/EditDifficultyCell'

type DifficultyPageProps = {
  id: number
}

const EditDifficultyPage = ({ id }: DifficultyPageProps) => {
  return <EditDifficultyCell id={id} />
}

export default EditDifficultyPage
