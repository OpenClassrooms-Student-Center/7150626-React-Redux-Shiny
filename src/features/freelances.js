import produce from 'immer'

// Le state initial de la feature freelances
const initialState = {
  // le statut permet de suivre l'état de la requête
  status: 'void',
  // les données lorsque la requête a fonctionné
  data: null,
  // l'erreur lorsque la requête échoue
  error: null,
}
// Les noms des actions
const FETCHING = 'freelances/fetching'
const RESOLVED = 'freelances/resolved'
const REJECTED = 'freelances/rejected'
// la requête est en cours
const freelancesFetching = () => ({ type: FETCHING })
// la requête a fonctionné
const freelancesResolved = (data) => ({ type: RESOLVED, payload: data })
// la requête a échoué
const freelancesRejected = (error) => ({ type: REJECTED, payload: error })

export default function freelancesReducer(state = initialState, action) {
  // on utilise immer pour changer le state
  return produce(state, (draft) => {
    // on fait un switch sur le type de l'action
    switch (action.type) {
      // si l'action est de type FETCHING
      case FETCHING: {
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
      }
      // si l'action est de type RESOLVED
      case RESOLVED: {
        // si la requête est en cours
        if (draft.status === 'pending' || draft.status === 'updating') {
          // on passe en resolved et on sauvegarde les données
          draft.data = action.payload
          draft.status = 'resolved'
          return
        }
        // sinon l'action est ignorée
        return
      }
      // si l'action est de type REJECTED
      case REJECTED: {
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
      }
      // Sinon (action invalide ou initialisation)
      default:
        // on ne fait rien (retourne le state sans modifications)
        return
    }
  })
}
