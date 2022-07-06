import {
  exerciseSets,
  exerciseSet,
  createExerciseSet,
  updateExerciseSet,
  deleteExerciseSet,
} from './exerciseSets'
import type { StandardScenario } from './exerciseSets.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('exerciseSets', () => {
  scenario('returns all exerciseSets', async (scenario: StandardScenario) => {
    const result = await exerciseSets()

    expect(result.length).toEqual(Object.keys(scenario.exerciseSet).length)
  })

  scenario(
    'returns a single exerciseSet',
    async (scenario: StandardScenario) => {
      const result = await exerciseSet({ id: scenario.exerciseSet.one.id })

      expect(result).toEqual(scenario.exerciseSet.one)
    }
  )

  scenario('creates a exerciseSet', async () => {
    const result = await createExerciseSet({
      input: {
        name: 'String',
        sortOrder: 2568805,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.sortOrder).toEqual(2568805)
  })

  scenario('updates a exerciseSet', async (scenario: StandardScenario) => {
    const original = await exerciseSet({ id: scenario.exerciseSet.one.id })
    const result = await updateExerciseSet({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a exerciseSet', async (scenario: StandardScenario) => {
    const original = await deleteExerciseSet({
      id: scenario.exerciseSet.one.id,
    })
    const result = await exerciseSet({ id: original.id })

    expect(result).toEqual(null)
  })
})
