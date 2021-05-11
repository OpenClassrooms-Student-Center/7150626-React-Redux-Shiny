import { combineReducers, createStore } from 'redux'
import themeReducer from '../features/theme'

// on utilise combineReducer pour faire
// fonctionner plusieurs reducers ensemble
const reducer = combineReducers({
  // le themeReducer est responsable de la propriété `theme` du state
  theme: themeReducer,
})

// on utilise le reducer créer avec combineReducers
// pour initialiser le store
// Pas besoin de passer de state initial
// car chaque reducer à son propre state initial
const store = createStore(reducer)

export default store
