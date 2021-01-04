import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {useState, useEffect} from 'react'

import Checkbox from './components/Checkbox'
import CheckboxGroup from './components/CheckboxGroup'
import Select from './components/Select'

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
  {id: 1, name: "Quanh"},
  {id: 2, name: "Tuh"}
]

function App() {
  const [value, setValue] = useState("")

  useEffect(() => {
    console.log(value)
  })

  return (
    <div>
      <ThemeProvider theme={appTheme.dark}>
        <Container title="Light Theme">
          <span>Radio</span>
          {/* <RadioGroup fullWidth horizontal name="ra1" onSelect={(x) => setValue(x)}>
            <RadioButton value={1}>One</RadioButton>
            <RadioButton value={2}>Two</RadioButton>
            <RadioButton value={3}>Three</RadioButton>
          </RadioGroup> */}
          <span>Checkbox</span>
          <CheckboxGroup fullWidth horizontal name="ra1" >
            <Checkbox value={1}>One</Checkbox>
            <Checkbox value={2}>Two</Checkbox>
            <Checkbox value={3}>Three</Checkbox>
          </CheckboxGroup>
        </Container>
        <Container title="Dark Theme">
        <Select data={data} color="false" background="false" id="select1"></Select>`
        </Container>
      </ThemeProvider>
    </div>
)}
export default App