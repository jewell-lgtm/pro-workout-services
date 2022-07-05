import { Prisma } from '@prisma/client'
import { nanoid } from 'nanoid'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        firebaseId: nanoid(),
        name: 'String',
        picture: 'String',
        email: 'String',
        updatedAt: '2022-07-05T16:50:24Z',
      },
    },
    two: {
      data: {
        firebaseId: nanoid(),
        name: 'String',
        picture: 'String',
        email: 'String',
        updatedAt: '2022-07-05T16:50:24Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
