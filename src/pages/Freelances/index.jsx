import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../utils/selectors'
import { useQuery } from 'react-query'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
  const {
    // les données renvoyées par le serveur
    // null si la requête n'est pas encore résolue
    data,
    // booléen qui indique si la requête est en cours
    isLoading,
    // l'erreur renvoyé par le serveur
    // ou null si pas d'erreur
    error,
  } = useQuery('freelances', async () => {
    const response = await fetch('http://localhost:8000/freelances')
    const data = await response.json()
    return data
  })

  const theme = useSelector(selectTheme)

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <div>
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {data.freelancersList.map((profile) => (
            <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
              <Card
                label={profile.job}
                title={profile.name}
                picture={profile.picture}
                theme={theme}
              />
            </Link>
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances
