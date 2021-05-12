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
