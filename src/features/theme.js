import { createAction } from '@reduxjs/toolkit'

export const toggleTheme = createAction('theme/toggle')

export const setTheme = createAction('theme/set')

export default function reducer(state = 'light', action) {
  if (action.type === toggleTheme.toString()) {
    return state === 'light' ? 'dark' : 'light'
  }
  if (action.type === setTheme.toString()) {
    return action.payload
  }
  return state
}
