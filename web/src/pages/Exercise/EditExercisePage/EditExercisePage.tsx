import EditExerciseCell from 'src/components/Exercise/EditExerciseCell'

type ExercisePageProps = {
  id: number
}

const EditExercisePage = ({ id }: ExercisePageProps) => {
  return <EditExerciseCell id={id} />
}

export default EditExercisePage
