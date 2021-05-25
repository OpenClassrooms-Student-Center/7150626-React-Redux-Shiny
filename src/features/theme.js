import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  // le nom du slice
  name: 'theme',
  // le state initial
  initialState: 'light',
  // reducers permet de définir les actions et le reducer
  reducers: {
    // l'action toggle ('theme/toggle')
    toggle: (state) => {
      return state === 'light' ? 'dark' : 'light'
    },
    // l'action set ('theme/set')
    set: (state, action) => {
      return action.payload
    },
  },
})
