import * as freelanceActions from './freelance'
import freelanceReducer from './freelance'

describe('Freelance reducer', () => {
  it('should return void intial state', () => {
    expect(freelanceReducer(undefined, { type: '@INIT' })).toEqual({})
  })

  it('should add freelance id key on fetching', () => {
    expect(freelanceReducer({}, freelanceActions.fetching('1'))).toEqual({
      1: { status: 'pending' },
    })
  })

  it('should resolved freelance', () => {
    expect(
      freelanceReducer(
        { 1: { status: 'pending' } },
        freelanceActions.resolved('1', {
          freelanceData: {
            id: '1',
            name: 'Julien Brun',
            job: 'Développeur mobile',
            picture: 'http://localhost:8000/images/4.jpeg',
            skills: ['React Native'],
            location: 'Lyon',
            available: true,
            tjm: 500,
          },
        })
      )
    ).toEqual({
      1: {
        status: 'resolved',
        data: {
          freelanceData: {
            id: '1',
            name: 'Julien Brun',
            job: 'Développeur mobile',
            picture: 'http://localhost:8000/images/4.jpeg',
            skills: ['React Native'],
            location: 'Lyon',
            available: true,
            tjm: 500,
          },
        },
      },
    })
  })
})
