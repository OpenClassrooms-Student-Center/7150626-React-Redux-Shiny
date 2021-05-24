import { createAction, createReducer } from '@reduxjs/toolkit'
import { selectFreelances } from '../utils/selectors'

// Le state initial de la feature freelances
const initialState = {
  // le statut permet de suivre l'état de la requête
  status: 'void',
  // les données lorsque la requête a fonctionné
  data: null,
  // l'erreur lorsque la requête échoue
  error: null,
}

const freelancesFetching = createAction('freelances/fetching')
const freelancesResolved = createAction('freelances/resolved')
const freelancesRejected = createAction('freelances/rejected')

export async function fetchOrUpdateFreelances(dispatch, getState) {
  const status = selectFreelances(getState()).status
  if (status === 'pending' || status === 'updating') {
    // on stop la fonction pour éviter de récupérer plusieurs fois la même donnée
    return
  }
  dispatch(freelancesFetching())
  try {
    // on utilise fetch pour faire la requête
    const response = await fetch('http://localhost:8000/freelances')
    const data = await response.json()
    dispatch(freelancesResolved(data))
  } catch (error) {
    dispatch(freelancesRejected(error))
  }
}

export default createReducer(initialState, (builder) =>
  builder
    // si l'action est de type Fetching
    .addCase(freelancesFetching, (draft) => {
      // si le statut est void
      if (draft.status === 'void') {
        // on passe en pending
        draft.status = 'pending'
        return
      }
      // si le statut est rejected
      if (draft.status === 'rejected') {
        // on supprime l'erreur et on passe en pending
        draft.error = null
        draft.status = 'pending'
        return
      }
      // si le statut est resolved
      if (draft.status === 'resolved') {
        // on passe en updating (requête en cours mais des données sont déjà présentent)
        draft.status = 'updating'
        return
      }
      // sinon l'action est ignorée
      return
    })
    // si l'action est de type Resolved
    .addCase(freelancesResolved, (draft, action) => {
      // si la requête est en cours
      if (draft.status === 'pending' || draft.status === 'updating') {
        // on passe en resolved et on sauvegarde les données
        draft.data = action.payload
        draft.status = 'resolved'
        return
      }
      // sinon l'action est ignorée
      return
    })
    // si l'action est de type Rejected
    .addCase(freelancesRejected, (draft, action) => {
      // si la requête est en cours
      if (draft.status === 'pending' || draft.status === 'updating') {
        // on passe en rejected, on sauvegarde l'erreur et on supprime les données
        draft.status = 'rejected'
        draft.error = action.payload
        draft.data = null
        return
      }
      // sinon l'action est ignorée
      return
    })
)
