import type { MutationResolvers, QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const currentUser: QueryResolvers['currentUser'] = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = context.currentUser as any

  return db.user.upsert({
    where: { firebaseId: user.uid },
    update: {
      name: user.name,
      picture: user.picture,
      email: user.email,
      emailIsVerified: user.email_verified,
    },
    create: {
      firebaseId: user.uid,
      name: user.name,
      picture: user.picture,
      email: user.email,
      emailIsVerified: user.email_verified,
    },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}
