import type {
  QueryResolvers,
  MutationResolvers,
  DifficultyResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const difficulties: QueryResolvers['difficulties'] = () => {
  return db.difficulty.findMany()
}

export const difficulty: QueryResolvers['difficulty'] = ({ id }) => {
  return db.difficulty.findUnique({
    where: { id },
  })
}

export const createDifficulty: MutationResolvers['createDifficulty'] = ({
  input,
}) => {
  return db.difficulty.create({
    data: input,
  })
}

export const updateDifficulty: MutationResolvers['updateDifficulty'] = ({
  id,
  input,
}) => {
  return db.difficulty.update({
    data: input,
    where: { id },
  })
}

export const deleteDifficulty: MutationResolvers['deleteDifficulty'] = ({
  id,
}) => {
  return db.difficulty.delete({
    where: { id },
  })
}

export const Difficulty: DifficultyResolvers = {
  exercise: (_obj, { root }) =>
    db.difficulty.findUnique({ where: { id: root.id } }).exercise(),
}
