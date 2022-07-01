import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ExerciseLayoutProps = {
  children: React.ReactNode
}

const ExercisesLayout = ({ children }: ExerciseLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.exercises()} className="rw-link">
            Exercises
          </Link>
        </h1>
        <Link to={routes.newExercise()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Exercise
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ExercisesLayout
