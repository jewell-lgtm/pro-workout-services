import {
  difficulties,
  difficulty,
  createDifficulty,
  updateDifficulty,
  deleteDifficulty,
} from './difficulties'
import type { StandardScenario } from './difficulties.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('difficulties', () => {
  scenario('returns all difficulties', async (scenario: StandardScenario) => {
    const result = await difficulties()

    expect(result.length).toEqual(Object.keys(scenario.difficulty).length)
  })

  scenario(
    'returns a single difficulty',
    async (scenario: StandardScenario) => {
      const result = await difficulty({ id: scenario.difficulty.one.id })

      expect(result).toEqual(scenario.difficulty.one)
    }
  )

  scenario('creates a difficulty', async (scenario: StandardScenario) => {
    const result = await createDifficulty({
      input: {
        name: 'String',
        sortOrder: 8616956,
        multiplier: 2134053.561715874,
        targetReps: 3293227,
        targetSets: 723133,
        imageUrl: 'String',
        description: 'String',
        exerciseId: scenario.difficulty.two.exerciseId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.sortOrder).toEqual(8616956)
    expect(result.multiplier).toEqual(2134053.561715874)
    expect(result.targetReps).toEqual(3293227)
    expect(result.targetSets).toEqual(723133)
    expect(result.imageUrl).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.exerciseId).toEqual(scenario.difficulty.two.exerciseId)
  })

  scenario('updates a difficulty', async (scenario: StandardScenario) => {
    const original = await difficulty({ id: scenario.difficulty.one.id })
    const result = await updateDifficulty({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a difficulty', async (scenario: StandardScenario) => {
    const original = await deleteDifficulty({ id: scenario.difficulty.one.id })
    const result = await difficulty({ id: original.id })

    expect(result).toEqual(null)
  })
})
