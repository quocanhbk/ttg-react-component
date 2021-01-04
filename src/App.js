import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {useState, useEffect} from 'react'

import RadioGroup from './components/RadioGroup'
import RadioButton from './components/RadioButton'
import Select from './components/Select'

const appTheme = {
    light: {
        mClr: {R: 23, G: 64, B: 145},
        tClr: {R: 255, G: 255, B: 255},
        
    },
    dark: {
        mClr: {R: 165, G: 156, B: 135},
        tClr: {R: 20, G: 16, B: 16}
    }
}

const data = [
  {id: 1, name:"banana"},
  {id: 2, name:"Orange"},
  {id: 3,name:"Mango"}
]

function App() {
  return (
    <div>
      <ThemeProvider theme={appTheme.light}>
        <Container title="Light Theme">
          <span>Radio</span>
          <RadioGroup fullWidth horizontal name="ra1" onSelect={(x) => setValue(x)}>
            <RadioButton value={1}>One</RadioButton>
            <RadioButton value={2}>Two</RadioButton>
            <RadioButton value={3}>Three</RadioButton>
          </RadioGroup>
          <Select data={data} id={1} color="true" name="one"/>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
