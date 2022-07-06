import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.DifficultyCreateArgs>({
  difficulty: {
    one: {
      data: {
        name: 'String',
        sortOrder: 8127079,
        multiplier: 4883183.497493933,
        targetReps: 6237780,
        targetSets: 7531067,
        imageUrl: 'String',
        description: 'String',
        updatedAt: '2022-07-01T12:13:40Z',
        exercise: {
          create: {
            name: 'String',
            sortOrder: 1729694,
            updatedAt: '2022-07-01T12:13:40Z',
            exerciseSet: {
              create: {
                name: 'String',
                sortOrder: 1089359,
                updatedAt: '2022-07-01T12:13:40Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        sortOrder: 1448991,
        multiplier: 1589460.8071974847,
        targetReps: 1394024,
        targetSets: 1445877,
        imageUrl: 'String',
        description: 'String',
        updatedAt: '2022-07-01T12:13:40Z',
        exercise: {
          create: {
            name: 'String',
            sortOrder: 3089531,
            updatedAt: '2022-07-01T12:13:40Z',
            exerciseSet: {
              create: {
                name: 'String',
                sortOrder: 3193294,
                updatedAt: '2022-07-01T12:13:40Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
