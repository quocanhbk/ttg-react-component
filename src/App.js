import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, Radio, RadioGroup} from './components/elements'
import CheckboxGroup from './components/elements/CheckboxGroup'
import theme from './utils/theme'
import {useState} from 'react'


function App() {
  const [mode, setMode] = useState("edit")
  const [myTheme, setTheme] = useState("light")
  return (
    <div>
      <ThemeProvider theme={theme[myTheme] || theme.light}>
        <Container title= {myTheme === "light" ? "Light Theme" : "Dark Theme"}>
          <Container headline="Display Mode" >
            <ButtonGroup fullWidth onSelect={x => setMode(x)}>
              <Button value="edit" default >Edit</Button>
              <Button value="view">View</Button>
              <Button value="disabled">Disabled</Button>
            </ButtonGroup>
          </Container>
          <Container headline="Theme" >
            <ButtonGroup fullWidth onSelect={x => setTheme(x)}>
              <Button value="light" default >Light</Button>
              <Button value="dark">Dark</Button>
            </ButtonGroup>
          </Container>
          <Container headline={"Checkbox Group"}>
            <CheckboxGroup displayMode={mode}>
              <Checkbox value={1}>One</Checkbox>
              <Checkbox value={2}>Two</Checkbox>
            </CheckboxGroup>
          </Container>
        </Container>
        
      </ThemeProvider>
    </div>
  )
}

export default App;
