import Content from "./components/Content";
import Toggle from "./components/Toggle";
import styled, { ThemeProvider } from 'styled-components'
import useDarkMode from "./styles/useDarkMode";
import { darktTheme, GlobalStyle, lightTheme } from './styles/globalStyle'

const Container = styled.div`
max-width: 50%;
margin: 8rem auto 0;
font-size: 1.2rem;
text-align: center;
`

function App() {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darktTheme
  console.log(theme);
  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyle />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Content />
      </Container>
    </ThemeProvider>
  );
}

export default App;
