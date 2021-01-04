import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {useState, useEffect} from 'react'

import RadioGroup from './components/RadioGroup'
import RadioButton from './components/RadioButton'

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
          <RadioGroup fullWidth horizontal name="ra1" onSelect={(x) => setValue(x)}>
            <RadioButton value={1}>One</RadioButton>
            <RadioButton value={2}>Two</RadioButton>
            <RadioButton value={3}>Three</RadioButton>
          </RadioGroup>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
