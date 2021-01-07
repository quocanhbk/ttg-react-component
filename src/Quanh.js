import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, CheckboxGroup, Radio, RadioGroup, Slider} from './components/elements'
import theme from './utils/theme'
import {useState, useEffect} from 'react'
import Box from './components/Box'
import Code from './components/Code'
import Toggle from './components/elements/Toggle'
import ToggleGroup from './components/elements/ToggleGroup'
function Quanh() {
  useEffect(() => {
    document.title = "Theme: " + theme[myTheme].name
  })
  const [mode, setMode] = useState("edit")
  const [myTheme, setTheme] = useState("light")
  const [checkboxGroupValue, setCheckboxGroupValue] = useState([])
  const [radioGroupValue, setRadioGroupValue] = useState("")
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [buttonGroupValue, setButtonGroupValue] = useState("")
  const [sliderValue, setSliderValue] = useState(0)
  const [toggleValue, setToggleValue] = useState("")
  const [toggleGroupValue, setToggleGroupValue] = useState([])
  return (
    <div>
      <ThemeProvider theme={theme[myTheme] || theme.light}>
        <Container title= {theme[myTheme].name}>

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
              <Button value="emerald">Emerald</Button>
              <Button value="rosewood">Rosewood</Button>
              <Button value="amethyst">Amethyst</Button>
            </ButtonGroup>
          </Container>

          <br/>

          <Container title={"Elements"} fullWidth>

            <Box title="Toggle">
              <Toggle displayMode={mode} onSelect={v => setToggleValue(v)}>Awesome</Toggle>
              <Code>{JSON.stringify(toggleValue)}</Code>
            </Box>

            <Box title="Toggle Group">
              <ToggleGroup displayMode={mode} onSelect={v => setToggleGroupValue(v)}>
                <Toggle value={1}>One</Toggle>
                <Toggle value={2}>Two</Toggle>
              </ToggleGroup>
              <Code>{JSON.stringify(toggleGroupValue)}</Code>
            </Box>

            <Box title="Checkbox">
              <Checkbox displayMode={mode} onSelect={(value) => setCheckboxValue(value)}>Awesome</Checkbox>
              <Code>{JSON.stringify(checkboxValue)}</Code>
            </Box>

            <Box title="Checkbox Group">
              <CheckboxGroup displayMode={mode} onSelect={(value) => setCheckboxGroupValue(value)}>
                <Checkbox value={1}>One</Checkbox>
                <Checkbox value={2}>Two</Checkbox>
              </CheckboxGroup>
              <Code>{JSON.stringify(checkboxGroupValue)}</Code>
            </Box>

            <Box title="Radio Group">
              <RadioGroup displayMode={mode} onSelect={(value) => setRadioGroupValue(value)}>
                <Radio value={1}>One</Radio>
                <Radio value={2}>Two</Radio>
                <Radio value={3}>Three</Radio>
              </RadioGroup>
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

            <Box title="Button" block>
              <Button success size="small" displayMode={mode} demo >Small</Button>
              <Button warning size="medium" displayMode={mode} demo >Medium</Button>
              <Button danger size="large" displayMode={mode} demo >Large</Button>
              <Button size="small" displayMode={mode} demo type="outline" >Small</Button>
              <Button size="medium" displayMode={mode} demo type="outline" >Medium</Button>
              <Button size="large" displayMode={mode} demo type="outline" >Large</Button>
              <Button size="small" displayMode={mode} demo type="text" >Small</Button>
              <Button size="medium" displayMode={mode} demo type="text" >Medium</Button>
              <Button size="large" displayMode={mode} demo type="text" >Large</Button>
            </Box>
              
            <Box title="Slide">
              <Slider onSlide={(v) => setSliderValue(v)} displayMode={mode}/>
              <Code>{JSON.stringify(sliderValue)}</Code>
            </Box>

          </Container>
        </Container>
        
      </ThemeProvider>
    </div>
  )
}

export default Quanh;
