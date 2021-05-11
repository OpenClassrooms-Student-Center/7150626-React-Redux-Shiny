// On utilise des variables pour les noms des actions
// pour éviter les fautes de frappe
const TOGGLE_THEME = 'theme/toggle'
const SET_THEME = 'theme/set'

// action creators

export const toggleTheme = () => ({ type: TOGGLE_THEME })

export const setTheme = (theme = 'light') => ({
  type: SET_THEME,
  payload: theme,
})

// Le reducer
// on utilise une valeur par défaut pour donner le state initial
export default function reducer(state = 'light', action) {
  if (action.type === TOGGLE_THEME) {
    return state === 'light' ? 'dark' : 'light'
  }
  if (action.type === SET_THEME) {
    return action.payload
  }
  return state
}
