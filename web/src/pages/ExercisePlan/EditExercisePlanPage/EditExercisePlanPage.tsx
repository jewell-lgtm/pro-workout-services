import EditExercisePlanCell from 'src/components/ExercisePlan/EditExercisePlanCell'

type ExercisePlanPageProps = {
  id: number
}

const EditExercisePlanPage = ({ id }: ExercisePlanPageProps) => {
  return <EditExercisePlanCell id={id} />
}

export default EditExercisePlanPage
