import { combineReducers, createStore } from 'redux'
import themeReducer from '../features/theme'
import freelancesReducer from '../features/freelances'
import surveyReducer from '../features/survey'

// on utilise combineReducer pour faire
// fonctionner plusieurs reducers ensemble
const reducer = combineReducers({
  // le themeReducer est responsable de la propriété `theme` du state
  theme: themeReducer,
  freelances: freelancesReducer,
  survey: surveyReducer,
})

// Pour connecter les Redux Devtools on utilise
// un fonction disponible sur l'objet window
// Si cette fonction existe on l'exécute.
const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// on utilise le résultat de cette fonction en parametre de createStore
const store = createStore(reducer, reduxDevtools)

export default store
