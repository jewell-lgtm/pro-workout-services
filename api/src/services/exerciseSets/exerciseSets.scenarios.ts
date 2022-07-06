import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ExerciseSetCreateArgs>({
  exerciseSet: {
    one: {
      data: {
        name: 'String',
        sortOrder: 7708597,
        updatedAt: '2022-07-01T12:13:23Z',
      },
    },
    two: {
      data: {
        name: 'String',
        sortOrder: 414350,
        updatedAt: '2022-07-01T12:13:23Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
