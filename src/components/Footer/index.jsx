import styled from 'styled-components'
import colors from '../../utils/style/colors'
import EmailInput from '../EmailInput'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme } from '../../utils/selectors'
import { toggleTheme } from '../../features/theme'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
  padding-top: 30px;
`

function Footer() {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()

  return (
    <FooterContainer>
      <EmailInput theme={theme} />
      <NightModeButton onClick={() => dispatch(toggleTheme())}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer
