import DifficultyCell from 'src/components/Difficulty/DifficultyCell'

type DifficultyPageProps = {
  id: number
}

const DifficultyPage = ({ id }: DifficultyPageProps) => {
  return <DifficultyCell id={id} />
}

export default DifficultyPage
