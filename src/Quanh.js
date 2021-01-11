import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, CheckboxGroup, Radio, RadioGroup, Slider, SimpleInput, Toggle, ToggleGroup, Link, Modal} from './components/elements'
import theme from './utils/theme'
import {useState, useEffect} from 'react'
import Box from './components/Box'
import Code from './components/Code'
import Calendar from './components/Calendar'
function Quanh() {
  useEffect(() => {
    document.title = "Theme: " + theme[myTheme].name
  })
  
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit mattis arcu semper elementum. Nullam accumsan erat vitae quam sagittis placerat. In sodales mi eros, id commodo nulla fermentum in. Cras vehicula, sapien id fringilla lobortis, erat nisl rhoncus ante, et maximus libero tellus commodo ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus justo nunc, sed molestie tortor dictum vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris maximus est quis ligula ullamcorper semper. Integer tempus orci dui, a lacinia lorem tempus ut. Donec sapien leo, sodales eu odio molestie, cursus lacinia quam. Aenean rhoncus rhoncus erat, nec volutpat nulla ullamcorper sit amet. Maecenas finibus, ante in suscipit rhoncus, massa lorem posuere est, vel faucibus turpis neque sit amet augue. Nulla sit amet mauris sit amet augue pharetra luctus vitae nec turpis. Duis sollicitudin commodo nisi quis mollis."
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
  const [modalState, setModalState] = useState(false)
  const [modalState2, setModalState2] = useState(false)
  const [dateValue, setDateValue] = useState("")
  return (
    <div>
      <ThemeProvider theme={theme[myTheme] || theme.light}>
        <Container headline={theme[myTheme].name} fullWidth>
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

          <Container headline={"Elements"} fullWidth>
            <Box headline="Modal" block>
              <Modal visible={modalState} onClickOutside={() => setModalState(false)} title="Great Title">
                {text}
              </Modal>
              <Button demo onSelect={() => setModalState(true)}>Open Modal With Title</Button>
              <Modal visible={modalState2} onClickOutside={() => setModalState2(false)}>
                {text}
              </Modal>
              <Button color="secondary" demo onSelect={() => setModalState2(true)}>Open Modal With No Title</Button>
            </Box>
            <Box headline="Link" block>
              Very beautiful <Link href="https://google.com">link</Link>
              <br/>
              Visited or not <Link href="#">link</Link>
              <br/>
              It can have <Link href="#" underline>underline</Link>
            </Box>
            <Box headline="Text Input">
              <SimpleInput displayMode={mode} default="default" demo onChange={(v) => setTextValue(v)} value={textValue}/>
              <Code>{JSON.stringify(textValue)}</Code>
            </Box>
            <Box headline="Button" block>
              <Button color="success" size="small" displayMode={mode} demo onSelect={() => console.log("Wow")}>Success</Button>
              <Button color="warning" size="medium" displayMode={mode} demo >Warning</Button>
              <Button color="danger" size="large" displayMode={mode} demo >Danger</Button>
              <Button color="primary"size="medium" displayMode={mode} demo >Primary</Button>
              <Button color="secondary"size="small" displayMode={mode} demo >Secondary</Button>
              <Button displayMode={mode} demo type="outline" >Outline</Button>
              <Button size="medium" displayMode={mode} demo type="text" >Text</Button>
            </Box>
            <Box headline="Calendar">
              <div>
                <Calendar demo onSelect={date => setDateValue(date)}/>
              </div>
              <Code>{dateValue.toString()}</Code>
            </Box>
            <Box headline="Toggle">
              <Toggle displayMode={mode} onSelect={v => setToggleValue(v)}>Awesome</Toggle>
              <Code>{JSON.stringify(toggleValue)}</Code>
            </Box>

            <Box headline="Toggle Group">
              <ToggleGroup displayMode={mode} onSelect={v => setToggleGroupValue(v)}>
                <Toggle value={1}>One</Toggle>
                <Toggle value={2}>Two</Toggle>
              </ToggleGroup>
              <Code>{JSON.stringify(toggleGroupValue)}</Code>
            </Box>

            <Box headline="Checkbox">
              <Checkbox displayMode={mode} onSelect={(value) => setCheckboxValue(value)}>Awesome</Checkbox>
              <Code>{JSON.stringify(checkboxValue)}</Code>
            </Box>

            <Box headline="Checkbox Group">
              <CheckboxGroup displayMode={mode} onSelect={(value) => setCheckboxGroupValue(value)}>
                <Checkbox value={1}>One</Checkbox>
                <Checkbox value={2}>Two</Checkbox>
              </CheckboxGroup>
              <Code>{JSON.stringify(checkboxGroupValue)}</Code>
            </Box>

            <Box headline="Radio Group">
              <RadioGroup displayMode={mode} onSelect={(value) => setRadioGroupValue(value)}>
                <Radio value={1}>One</Radio>
                <Radio value={2}>Two</Radio>
                <Radio value={3}>Three</Radio>
              </RadioGroup>
              <Code>{JSON.stringify(radioGroupValue)}</Code>
            </Box>

            <Box headline="Button Group">
              <ButtonGroup displayMode={mode} onSelect={(value) => setButtonGroupValue(value)}>
                <Button value={1}>One</Button>
                <Button value={2}>Two</Button>
                <Button value={3}>Three</Button>
              </ButtonGroup>
              <Code>{JSON.stringify(buttonGroupValue)}</Code>
            </Box>              
            <Box headline="Slide">
              <Slider onSlide={(v) => setSliderValue(v)} displayMode={mode} fullWidth/>
              <Code>{JSON.stringify(sliderValue)}</Code>
            </Box>

          </Container>
        </Container>
        
      </ThemeProvider>
    </div>
  )
}

export default Quanh;
