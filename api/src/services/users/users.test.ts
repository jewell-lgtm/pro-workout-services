import {
  createUser,
  currentUser,
  deleteUser,
  updateUser,
  user,
  users,
} from './users'
import type { StandardScenario } from './users.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('users', () => {
  scenario('returns all users', async (scenario: StandardScenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario('returns a single user', async (scenario: StandardScenario) => {
    const result = await user({ id: scenario.user.one.id })

    expect(result).toEqual(scenario.user.one)
  })

  scenario('creates a user', async () => {
    const result = await createUser({
      input: {
        firebaseId: 'String',
        name: 'String',
        picture: 'String',
        email: 'String',
      },
    })

    expect(result.firebaseId).toEqual('String')
    expect(result.name).toEqual('String')
    expect(result.picture).toEqual('String')
    expect(result.email).toEqual('String')
  })

  scenario('updates a user', async (scenario: StandardScenario) => {
    const original = await user({ id: scenario.user.one.id })
    const result = await updateUser({
      id: original.id,
      input: { firebaseId: 'String2' },
    })

    expect(result.firebaseId).toEqual('String2')
  })

  scenario('deletes a user', async (scenario: StandardScenario) => {
    const original = await deleteUser({ id: scenario.user.one.id })
    const result = await user({ id: original.id })

    expect(result).toEqual(null)
  })

  scenario('gets the current user', async () => {
    mockCurrentUser({
      uid: 'an as yet unseen firebase id',
      name: 'Namey McNamington',
      picture: 'A photo',
      email: 'email@example.com',
    })
    const user = await currentUser()

    expect(user).toEqual(
      expect.objectContaining({ firebaseId: 'an as yet unseen firebase id' })
    )
  })

  scenario('updates the current user', async (scenario: StandardScenario) => {
    mockCurrentUser({
      uid: scenario.user.one.firebaseId,
      name: 'A new Name',
      picture: 'A new photo',
      email: 'email_new@example.com',
    })
    const result = await currentUser()

    expect(result).toEqual(
      expect.objectContaining({ firebaseId: scenario.user.one.firebaseId })
    )
    expect(await user({ id: scenario.user.one.id })).toEqual(
      expect.objectContaining({
        name: 'A new Name',
        picture: 'A new photo',
        email: 'email_new@example.com',
      })
    )
  })
})
