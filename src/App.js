import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {useState, useEffect} from 'react'

// import RadioGroup from './components/RadioGroup'
// import RadioButton from './components/RadioButton'
import Checkbox from './components/Checkbox'
import CheckboxGroup from './components/CheckboxGroup'
import Select from './components/Select'
import ToggleGroup from './components/ToggleGroup'
import ToggleSwitch from './components/ToggleSwitch'

const appTheme = {
  light: {
    name: "light",
    textColor: "#FFFFFF",
    fillColor: "#174091"
},
dark: {
    name: "dark",
    textColor: "#000000",
    fillColor: "#A59C87"
}
}

const data = [
  {id: 1, name:"banana"},
  {id: 2, name:"Orange"},
  {id: 3,name:"Mango"}
]

function App() {
  const [value, setValue] = useState("")

  useEffect(() => {
    console.log(value)
  })
  return (
    <div>
      <ThemeProvider theme={appTheme.light}>
        <Container title="Light Theme">
          <span>Radio</span>
          {/* <RadioGroup fullWidth horizontal name="ra1" onSelect={(x) => setValue(x)}>
            <RadioButton value={1}>One</RadioButton>
            <RadioButton value={2}>Two</RadioButton>
            <RadioButton value={3}>Three</RadioButton>
          </RadioGroup> */}
          <Select data={data} id={1} color="true" name="one"/>
          <span>Checkbox</span>
          <CheckboxGroup fullWidth horizontal name="ra1" >
            <Checkbox value={1}>One</Checkbox>
            <Checkbox value={2}>Two</Checkbox>
            <Checkbox value={3}>Three</Checkbox>
          </CheckboxGroup> 
          <span>Toggle</span> 
          <ToggleGroup fullWidth horizontal={false} name="check1" onSelect={(x) => setValue(x)} >
            <ToggleSwitch value={1}>One</ToggleSwitch>
            <ToggleSwitch value={2}>Two</ToggleSwitch>
            <ToggleSwitch value={3}>Three</ToggleSwitch>
          </ToggleGroup>  
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
