import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Button, ButtonGroup} from './components/elements'
import theme from './utils/theme'


const data = [
  {id: 1, name:"Apple"},
  {id: 2, name:"Banana"},
  {id: 3, name:"Orange"},
  {id: 4, name:"Mango"},
  {id: 5, name:"Kiwi"}
]

function App() {
  return (
    <div>
      <ThemeProvider theme={theme.light}>
        <Container title="Light Theme">
          <ButtonGroup>
            <Button value={1}>One</Button>
            <Button value={2}>Two</Button>
            <Button value={3}>Three</Button>
          </ButtonGroup>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
