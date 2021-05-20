import { createAction } from '@reduxjs/toolkit'

export const toggleTheme = createAction('theme/toggle')

const SET_THEME = 'theme/set'

export const setTheme = (theme = 'light') => ({
  type: SET_THEME,
  payload: theme,
})

export default function reducer(state = 'light', action) {
  if (action.type === toggleTheme.toString()) {
    return state === 'light' ? 'dark' : 'light'
  }
  if (action.type === SET_THEME) {
    return action.payload
  }
  return state
}
