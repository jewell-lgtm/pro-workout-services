import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ExerciseSetLayoutProps = {
  children: React.ReactNode
}

const ExerciseSetsLayout = ({ children }: ExerciseSetLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.exerciseSets()} className="rw-link">
            ExerciseSets
          </Link>
        </h1>
        <Link
          to={routes.newExerciseSet()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New ExerciseSet
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ExerciseSetsLayout
