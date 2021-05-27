import * as freelancesActions from './freelances'
import freelancesReducer from './freelances'

describe('Freelances reducer', () => {
  it('should return void intial state', () => {
    expect(freelancesReducer(undefined, { type: '@INIT' })).toEqual({
      data: null,
      error: null,
      status: 'void',
    })
  })

  it('should add freelance id key on fetching', () => {
    expect(
      freelancesReducer(
        { data: null, error: null, status: 'void' },
        freelancesActions.fetching()
      )
    ).toEqual({ data: null, error: null, status: 'pending' })
  })

  it('should resolved freelance', () => {
    const state = freelancesReducer(
      { data: null, error: null, status: 'pending' },
      freelancesActions.resolved({
        freelancersList: [],
      })
    )
    expect(state.status).toBe('resolved')
  })

  it('should switch to updating when fetching on resolved', () => {
    const state = freelancesReducer(
      { data: [], error: null, status: 'resolved' },
      freelancesActions.fetching()
    )
    expect(state.status).toBe('updating')
    expect(state.data).toEqual([])
  })

  it('should ignore rejected on resolved', () => {
    const state = freelancesReducer(
      { data: [], error: null, status: 'resolved' },
      freelancesActions.rejected('Oops')
    )
    expect(state.status).toBe('resolved')
    expect(state.data).toEqual([])
  })
})
