import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Select} from './components/elements'
import theme from './utils/theme'


function App() {
  return (
    <div>
      <ThemeProvider theme={theme.light}>
        <Container title="Light Theme">
          <Select/>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
