import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import theme from './utils/theme'
import {Checkbox, CheckBoxGroup, Radio, RadioGroup, Button, ButtonGroup} from './components/elements'

function App() {
  return (
    <div style={{display: "flex"}}>
      <ThemeProvider theme={theme.light}>
        <Container title="Light">
          <ButtonGroup demo>
            <Button value={1}>One</Button>
            <Button value={2}>Two</Button>
            <Button value={3}>Three</Button>
          </ButtonGroup>
          <Checkbox value={1} onSelect={(value) => console.log(value)}>One</Checkbox>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
