import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, CheckboxGroup, Radio, RadioGroup, Slider, SimpleInput, Toggle, ToggleGroup, Link} from './components/elements'
import theme from './utils/theme'
import {useState, useEffect} from 'react'
import Box from './components/Box'
import Code from './components/Code'

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
  const [textValue, setTextValue] = useState("")
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
            </ButtonGroup>
          </Container>

          <br/>

          <Container title={"Elements"} fullWidth>
            <Box title="Link" block>
              Very beautiful <Link href="https://google.com">link</Link>
              <br/>
              Visited or not <Link href="#">link</Link>
              <br/>
              It can have <Link href="#" underline>underline</Link>
            </Box>
            <Box title="Text Input">
              <SimpleInput displayMode={mode} default="default" demo onChange={(v) => setTextValue(v)} value={textValue}/>
              <Code>{JSON.stringify(textValue)}</Code>
            </Box>
            <Box title="Button" block>
              <Button color="success" size="small" displayMode={mode} demo >Success</Button>
              <Button color="warning" size="medium" displayMode={mode} demo >Warning</Button>
              <Button color="danger" size="large" displayMode={mode} demo >Danger</Button>
              <Button color="primary"size="medium" displayMode={mode} demo >Primary</Button>
              <Button color="secondary"size="small" displayMode={mode} demo >Secondary</Button>
              <Button displayMode={mode} demo type="outline" >Outline</Button>
              <Button size="medium" displayMode={mode} demo type="text" >Text</Button>
            </Box>

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
