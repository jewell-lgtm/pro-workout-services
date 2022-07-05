// noinspection RequiredAttributes
// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import DifficultiesLayout from 'src/layouts/DifficultiesLayout'
import ExercisePlansLayout from 'src/layouts/ExercisePlansLayout'
import ExercisesLayout from 'src/layouts/ExercisesLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Private unauthenticated="/login">
        <Set wrap={DifficultiesLayout}>
          <Route path="/difficulties/new" page={DifficultyNewDifficultyPage} name="newDifficulty" />
          <Route path="/difficulties/{id:Int}/edit" page={DifficultyEditDifficultyPage} name="editDifficulty" />
          <Route path="/difficulties/{id:Int}" page={DifficultyDifficultyPage} name="difficulty" />
          <Route path="/difficulties" page={DifficultyDifficultiesPage} name="difficulties" />
        </Set>
        <Set wrap={ExercisesLayout}>
          <Route path="/exercises/new" page={ExerciseNewExercisePage} name="newExercise" />
          <Route path="/exercises/{id:Int}/edit" page={ExerciseEditExercisePage} name="editExercise" />
          <Route path="/exercises/{id:Int}" page={ExerciseExercisePage} name="exercise" />
          <Route path="/exercises" page={ExerciseExercisesPage} name="exercises" />
        </Set>
        <Set wrap={ExercisePlansLayout}>
          <Route path="/exercise-plans/new" page={ExercisePlanNewExercisePlanPage} name="newExercisePlan" />
          <Route path="/exercise-plans/{id:Int}/edit" page={ExercisePlanEditExercisePlanPage} name="editExercisePlan" />
          <Route path="/exercise-plans/{id:Int}" page={ExercisePlanExercisePlanPage} name="exercisePlan" />
          <Route path="/exercise-plans" page={ExercisePlanExercisePlansPage} name="exercisePlans" />
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
