import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    const plan: Prisma.ExerciseSetCreateInput = {
      name: 'Default',
      sortOrder: 0,
      exercises: {
        create: [
          {
            name: 'Squats',
            sortOrder: 0,
            difficulties: {
              create: [
                {
                  name: 'Easy Squat',
                  sortOrder: 0,
                  description: 'This is an easy one',
                  imageUrl:
                    'https://dummyimage.com/600x400/000/fff&text=easy+squat',
                  targetReps: 30,
                  targetSets: 3,
                  multiplier: 0.5,
                },
                {
                  name: 'Medium Squat',
                  sortOrder: 1,
                  description: 'This is an medium one',
                  imageUrl:
                    'https://dummyimage.com/600x400/000/fff&text=medium+squat',
                  targetReps: 30,
                  targetSets: 3,
                  multiplier: 1,
                },
                {
                  name: 'Hard Squat',
                  sortOrder: 2,
                  description: 'This is an hard one',
                  imageUrl:
                    'https://dummyimage.com/600x400/000/fff&text=hard+squat',
                  targetReps: 12,
                  targetSets: 3,
                  multiplier: 1.5,
                },
              ],
            },
          },
          {
            name: 'Press Ups',
            sortOrder: 0,
            difficulties: {
              create: [
                {
                  name: 'Easy Press Up',
                  sortOrder: 0,
                  description: 'This is an easy one',
                  imageUrl:
                    'https://dummyimage.com/600x400/000/fff&text=easy+press+up',
                  targetReps: 30,
                  targetSets: 3,
                  multiplier: 0.5,
                },
                {
                  name: 'Medium Press Up',
                  sortOrder: 1,
                  description: 'This is an medium one',
                  imageUrl:
                    'https://dummyimage.com/600x400/000/fff&text=medium+press+up',
                  targetReps: 30,
                  targetSets: 3,
                  multiplier: 1,
                },
                {
                  name: 'Hard Press Up',
                  sortOrder: 2,
                  description: 'This is an hard one',
                  imageUrl:
                    'https://dummyimage.com/600x400/000/fff&text=hard+press+up',
                  targetReps: 12,
                  targetSets: 3,
                  multiplier: 1.5,
                },
              ],
            },
          },
          {
            name: 'Pull Ups',
            sortOrder: 0,
            difficulties: {
              create: [
                {
                  name: 'Easy Pull Up',
                  sortOrder: 0,
                  description: 'This is an easy one',
                  imageUrl:
                    'https://dummyimage.com/600x400/000/fff&text=easy+pull+up',
                  targetReps: 30,
                  targetSets: 3,
                  multiplier: 0.5,
                },
                {
                  name: 'Medium Pull Up',
                  sortOrder: 1,
                  description: 'This is an medium one',
                  imageUrl:
                    'https://dummyimage.com/600x400/000/fff&text=medium+pull+up',
                  targetReps: 30,
                  targetSets: 3,
                  multiplier: 1,
                },
                {
                  name: 'Hard Pull Up',
                  sortOrder: 2,
                  description: 'This is an hard one',
                  imageUrl:
                    'https://dummyimage.com/600x400/000/fff&text=hard+pull+up',
                  targetReps: 12,
                  targetSets: 3,
                  multiplier: 1.5,
                },
              ],
            },
          },
        ],
      },
    }

    await db.exerciseSet.create({ data: plan })
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
