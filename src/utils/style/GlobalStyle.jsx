import { useSelector } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { selectTheme } from '../selectors'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    a {
      text-decoration: none;
    }

    body {
        background-color: ${(props) =>
          props.isDarkMode ? '#2F2E41' : 'white'};
        margin: 0;
    }
`

function GlobalStyle() {
  const theme = useSelector(selectTheme)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
