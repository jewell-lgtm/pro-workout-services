import EditExerciseSetCell from 'src/components/ExerciseSet/EditExerciseSetCell'

type ExerciseSetPageProps = {
  id: number
}

const EditExerciseSetPage = ({ id }: ExerciseSetPageProps) => {
  return <EditExerciseSetCell id={id} />
}

export default EditExerciseSetPage
