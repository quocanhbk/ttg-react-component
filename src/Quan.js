import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, Radio, RadioGroup} from './components/elements'
import CheckboxGroup from './components/elements/CheckboxGroup'
import TableDatePicker from './components/TableDatePicker'
import theme from './utils/theme'
import {useState} from 'react'

function Quanh() {
  const [mode, setMode] = useState("edit")
  const [myTheme, setTheme] = useState("light")
  const [checkboxGroupValue, setCheckboxGroupValue] = useState("initialState")
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

          <hr/>

          <Container title={"Elements"}>
            <p>Checkbox Group</p>
            <CheckboxGroup displayMode={mode}>
              <Checkbox value={1}>One</Checkbox>
              <Checkbox value={2}>Two</Checkbox>
            </CheckboxGroup>

            <p>Normal Checkbox</p>
            <Checkbox value={3} displayMode={mode}>Three</Checkbox>

            <p>Radio Group</p>
            <RadioGroup displayMode={mode}>
              <Radio value={1}>One</Radio>
              <Radio value={2}>Two</Radio>
            </RadioGroup>

            <p>Select Date</p>
            <TableDatePicker displayMode={mode}>Don't forget select date</TableDatePicker>

          </Container>
        </Container>
        
      </ThemeProvider>
    </div>
  )
}

export default Quanh;
