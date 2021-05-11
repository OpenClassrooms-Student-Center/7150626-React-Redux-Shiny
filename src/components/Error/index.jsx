import styled from 'styled-components'
import colors from '../../utils/style/colors'
import ErrorIllustration from '../../assets/404.svg'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../utils/selectors'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  align-items: center;
`

const ErrorTitle = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
  font-weight: 300;
`

const Illustration = styled.img`
  max-width: 800px;
`

function Error() {
  const theme = useSelector(selectTheme)

  return (
    <ErrorWrapper theme={theme}>
      <ErrorTitle theme={theme}>Oups...</ErrorTitle>
      <Illustration src={ErrorIllustration} />
      <ErrorSubtitle theme={theme}>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error
