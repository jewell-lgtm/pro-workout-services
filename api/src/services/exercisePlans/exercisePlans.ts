import type {
  QueryResolvers,
  MutationResolvers,
  ExercisePlanResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const exercisePlans: QueryResolvers['exercisePlans'] = () => {
  return db.exercisePlan.findMany()
}

export const exercisePlan: QueryResolvers['exercisePlan'] = ({ id }) => {
  return db.exercisePlan.findUnique({
    where: { id },
  })
}

export const createExercisePlan: MutationResolvers['createExercisePlan'] = ({
  input,
}) => {
  return db.exercisePlan.create({
    data: input,
  })
}

export const updateExercisePlan: MutationResolvers['updateExercisePlan'] = ({
  id,
  input,
}) => {
  return db.exercisePlan.update({
    data: input,
    where: { id },
  })
}

export const deleteExercisePlan: MutationResolvers['deleteExercisePlan'] = ({
  id,
}) => {
  return db.exercisePlan.delete({
    where: { id },
  })
}

export const ExercisePlan: ExercisePlanResolvers = {
  exercises: (_obj, { root }) =>
    db.exercisePlan.findUnique({ where: { id: root.id } }).exercises(),
}
