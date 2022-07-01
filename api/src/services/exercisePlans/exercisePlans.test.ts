import {
  exercisePlans,
  exercisePlan,
  createExercisePlan,
  updateExercisePlan,
  deleteExercisePlan,
} from './exercisePlans'
import type { StandardScenario } from './exercisePlans.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('exercisePlans', () => {
  scenario('returns all exercisePlans', async (scenario: StandardScenario) => {
    const result = await exercisePlans()

    expect(result.length).toEqual(Object.keys(scenario.exercisePlan).length)
  })

  scenario(
    'returns a single exercisePlan',
    async (scenario: StandardScenario) => {
      const result = await exercisePlan({ id: scenario.exercisePlan.one.id })

      expect(result).toEqual(scenario.exercisePlan.one)
    }
  )

  scenario('creates a exercisePlan', async () => {
    const result = await createExercisePlan({
      input: {
        name: 'String',
        sortOrder: 2568805,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.sortOrder).toEqual(2568805)
  })

  scenario('updates a exercisePlan', async (scenario: StandardScenario) => {
    const original = await exercisePlan({ id: scenario.exercisePlan.one.id })
    const result = await updateExercisePlan({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a exercisePlan', async (scenario: StandardScenario) => {
    const original = await deleteExercisePlan({
      id: scenario.exercisePlan.one.id,
    })
    const result = await exercisePlan({ id: original.id })

    expect(result).toEqual(null)
  })
})
