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
import ExerciseSetsLayout from 'src/layouts/ExerciseSetsLayout'
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
        <Set wrap={ExerciseSetsLayout}>
          <Route path="/exercise-set/new" page={ExerciseSetNewExerciseSetPage} name="newExerciseSet" />
          <Route path="/exercise-set/{id:Int}/edit" page={ExerciseSetEditExerciseSetPage} name="editExerciseSet" />
          <Route path="/exercise-set/{id:Int}" page={ExerciseSetExerciseSetPage} name="exerciseSet" />
          <Route path="/exercise-set" page={ExerciseSetExerciseSetsPage} name="exerciseSets" />
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
