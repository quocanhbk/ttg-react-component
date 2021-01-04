import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
const appTheme = {
    light: {
        textColor: "#FFFFFF",
        fillColor: "#174091"
    },
    dark: {
        textColor: "#000000",
        fillColor: "#A59C87"
    }
}

function App() {
  return (
    <div>
      <ThemeProvider theme={appTheme.light}>
        <Container title="Light Theme">
          <Button demo>Contained</Button>
          <Button fullWidth>Contained</Button>
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
