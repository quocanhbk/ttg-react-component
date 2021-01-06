import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import theme from './utils/theme'
import Dat from './Dat'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme.light}>
        <Container title="Light Theme">
          <Dat/>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
