import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ExerciseCreateArgs>({
  exercise: {
    one: {
      data: {
        name: 'String',
        sortOrder: 4065865,
        updatedAt: '2022-07-01T12:13:30Z',
        exerciseSet: {
          create: {
            name: 'String',
            sortOrder: 7937512,
            updatedAt: '2022-07-01T12:13:30Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        sortOrder: 7151762,
        updatedAt: '2022-07-01T12:13:30Z',
        exerciseSet: {
          create: {
            name: 'String',
            sortOrder: 1078287,
            updatedAt: '2022-07-01T12:13:30Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
