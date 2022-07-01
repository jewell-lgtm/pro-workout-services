import ExerciseCell from 'src/components/Exercise/ExerciseCell'

type ExercisePageProps = {
  id: number
}

const ExercisePage = ({ id }: ExercisePageProps) => {
  return <ExerciseCell id={id} />
}

export default ExercisePage
