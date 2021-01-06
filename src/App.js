import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Button, ButtonGroup} from './components/elements'
import theme from './utils/theme'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme.light}>
        <Container title="Light Theme">
          <ButtonGroup fullWidth>
            <Button value={1} demo>One</Button>
            <Button value={2} demo>Two</Button>
            <Button value={3} demo>Three</Button>
            <Button value={4} demo>Four</Button>
          </ButtonGroup>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
