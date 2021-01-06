import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, CheckboxGroup, Radio, RadioGroup, Toggle, ToggleGroup} from './components/elements'
import theme from './utils/theme'
import {useState} from 'react'
import Box from './components/Box'
import Code from './components/Code'

function Quanh() {
  const [mode, setMode] = useState("edit")
  const [myTheme, setTheme] = useState("light")
  const [checkboxGroupValue, setCheckboxGroupValue] = useState([])
  const [radioGroupValue, setRadioGroupValue] = useState("")
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [buttonGroupValue, setButtonGroupValue] = useState("")
  const [buttonValue, setButtonValue] = useState("")
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

          <Container title={"Elements"} fullWidth>
            <Box title="Checkbox Group">
              <CheckboxGroup displayMode={mode} onSelect={(value) => setCheckboxGroupValue(value)}>
                <Checkbox value={1}>One</Checkbox>
                <Checkbox value={2}>Two</Checkbox>
              </CheckboxGroup>
              <Code>{JSON.stringify(checkboxGroupValue)}</Code>
            </Box>
            <Box title="Checkbox">
              <Checkbox value={3} displayMode={mode} onSelect={(value) => setCheckboxValue(value)}>Awesome</Checkbox>
              <Code>{JSON.stringify(checkboxValue)}</Code>
            </Box>
            <Box title="Radio Group">
              <RadioGroup displayMode={mode} onSelect={(value) => setRadioGroupValue(value)}>
                <Radio value={1}>One</Radio>
                <Radio value={2}>Two</Radio>
                <Radio value={3}>Three</Radio>
              </RadioGroup>
              <Code>{JSON.stringify(radioGroupValue)}</Code>
            </Box>
            <Box title="Toggle Group">
              <ToggleGroup displayMode={mode} onSelect={(value) => setRadioGroupValue(value)}>
                <Toggle value={1}>One</Toggle>
                <Toggle value={2}>Two</Toggle>
                <Toggle value={3}>Three</Toggle>
              </ToggleGroup>
              <Code>{JSON.stringify(radioGroupValue)}</Code>
            </Box>
            <Box title="Button Group">
              <ButtonGroup displayMode={mode} onSelect={(value) => setButtonGroupValue(value)}>
                <Button value={1}>One</Button>
                <Button value={2}>Two</Button>
                <Button value={3}>Three</Button>
              </ButtonGroup>
              <Code>{JSON.stringify(buttonGroupValue)}</Code>
            </Box>
            <Box title="Button">
              <div>
              <Button size="small"displayMode={mode} demo onClick={() => setButtonValue("Clicked One")}>One</Button>
              <Button size="medium"displayMode={mode} demo onClick={() => setButtonValue("Clicked One")}>One</Button>
              <Button size="large"displayMode={mode} demo onClick={() => setButtonValue("Clicked One")}>One</Button>
              <Button displayMode={mode} demo type="outline" onClick={() => setButtonValue("Clicked Two")}>Two</Button>
              <Button displayMode={mode} demo type="text" onClick={() => setButtonValue("Clicked Three")}>Three</Button>
              </div>
              <Code>{JSON.stringify(buttonValue)}</Code>
            </Box>
            


          </Container>
        </Container>
        
      </ThemeProvider>
    </div>
  )
}

export default Quanh;
