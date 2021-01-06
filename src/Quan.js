import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, Radio, RadioGroup} from './components/elements'
import CheckboxGroup from './components/elements/CheckboxGroup'
import ToggleGroup from './components/ToggleGroup'
import ToggleSwitch from './components/ToggleSwitch'
import TableDatePicker from './components/TableDatePicker'
import Slider from './components/Slider'

import theme from './utils/theme'
import {useState} from 'react'

function Quanh() {
  const [mode, setMode] = useState("edit")
  const [myTheme, setTheme] = useState("light")
  const [checkboxGroupValue, setCheckboxGroupValue] = useState("initialState")
  const [rangeValue, setRangeValue] = useState(0)

  const onChangeSlider = e => {
    setRangeValue(parseInt(e.target.value, 10))
  }
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
            <p>Toggle Group</p>
            <ToggleGroup displayMode={mode}>
              <ToggleSwitch value={1}>One</ToggleSwitch>
              <ToggleSwitch value={2}>Two</ToggleSwitch>
            </ToggleGroup>

            <p>Select Date</p>
            <TableDatePicker displayMode={mode}>Don't forget select date</TableDatePicker>

            <p>Slider</p>
            <Slider displayMode={mode}
            min={0}
            max={100}
            step={1}
            defaultLength={rangeValue}
            value={rangeValue}
            onChangeValue={onChangeSlider}
            ></Slider>

          </Container>
        </Container>
        
      </ThemeProvider>
    </div>
  )
}

export default Quanh;
