import ExercisePlanCell from 'src/components/ExercisePlan/ExercisePlanCell'

type ExercisePlanPageProps = {
  id: number
}

const ExercisePlanPage = ({ id }: ExercisePlanPageProps) => {
  return <ExercisePlanCell id={id} />
}

export default ExercisePlanPage
