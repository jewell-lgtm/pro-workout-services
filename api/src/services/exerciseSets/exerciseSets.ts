import type {
  QueryResolvers,
  MutationResolvers,
  ExerciseSetResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const exerciseSets: QueryResolvers['exerciseSets'] = () => {
  return db.exerciseSet.findMany()
}

export const exerciseSet: QueryResolvers['exerciseSet'] = ({ id }) => {
  return db.exerciseSet.findUnique({
    where: { id },
  })
}

export const createExerciseSet: MutationResolvers['createExerciseSet'] = ({
  input,
}) => {
  return db.exerciseSet.create({
    data: input,
  })
}

export const updateExerciseSet: MutationResolvers['updateExerciseSet'] = ({
  id,
  input,
}) => {
  return db.exerciseSet.update({
    data: input,
    where: { id },
  })
}

export const deleteExerciseSet: MutationResolvers['deleteExerciseSet'] = ({
  id,
}) => {
  return db.exerciseSet.delete({
    where: { id },
  })
}

export const ExerciseSet: ExerciseSetResolvers = {
  exercises: (_obj, { root }) =>
    db.exerciseSet.findUnique({ where: { id: root.id } }).exercises(),
}
