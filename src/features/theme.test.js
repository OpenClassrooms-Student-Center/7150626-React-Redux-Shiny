import * as themeActions from './theme'

describe('Theme actions', () => {
  it('should create a toggle action objet', () => {
    expect(themeActions.toggle()).toEqual({
      type: 'theme/toggle',
    })
  })

  it('should create a set action objet', () => {
    expect(themeActions.set('light')).toEqual({
      type: 'theme/set',
      payload: 'light',
    })
    expect(themeActions.set('dark')).toEqual({
      type: 'theme/set',
      payload: 'dark',
    })
  })
})
