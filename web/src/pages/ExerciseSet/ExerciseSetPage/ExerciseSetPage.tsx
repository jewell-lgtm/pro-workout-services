import ExerciseSetCell from 'src/components/ExerciseSet/ExerciseSetCell'

type ExerciseSetPageProps = {
  id: number
}

const ExerciseSetPage = ({ id }: ExerciseSetPageProps) => {
  return <ExerciseSetCell id={id} />
}

export default ExerciseSetPage
