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

// cette fonction est une action asynchrone
// elle attend le store redux en paramètre
export async function fetchOrUpdateFreelances(store) {
  // on peut lire le state actuel avec store.getState()
  const status = selectFreelances(store.getState()).status
  // si la requête est déjà en cours
  if (status === 'pending' || status === 'updating') {
    // on stop la fonction pour éviter de récupérer plusieurs fois la même donnée
    return
  }
  // On peut modifier le state en envoyant des actions avec store.dispatch()
  // ici on indique que la requête est en cours
  store.dispatch(freelancesFetching())
  try {
    // on utilise fetch pour faire la requête
    const response = await fetch('http://localhost:8000/freelances')
    const data = await response.json()
    // si la requête fonctionne, on envoie les données à redux avec l'action resolved
    store.dispatch(freelancesResolved(data))
  } catch (error) {
    // en cas d'erreur on infirme le store avec l'action rejected
    store.dispatch(freelancesRejected(error))
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
