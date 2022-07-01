import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ExercisePlanLayoutProps = {
  children: React.ReactNode
}

const ExercisePlansLayout = ({ children }: ExercisePlanLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.exercisePlans()} className="rw-link">
            ExercisePlans
          </Link>
        </h1>
        <Link
          to={routes.newExercisePlan()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New ExercisePlan
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ExercisePlansLayout
