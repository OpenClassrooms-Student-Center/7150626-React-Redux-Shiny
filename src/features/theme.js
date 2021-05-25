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

// on extrait les actions et le reducer
const { actions, reducer } = themeSlice
// on export chaque action individuellement
export const { set, toggle } = actions
// on export le reducer comme default export
export default reducer
