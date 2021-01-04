import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {useState, useEffect} from 'react'
import IcoAlignLeft from './components/icons/IcoAlignLeft'
import IcoAlignRight from './components/icons/IcoAlignRight'
import IcoAlignJustify from './components/icons/IcoAlignJustify'
const appTheme = {
    light: {
        textColor: "#FFFFFF",
        fillColor: "#174091"
    },
    dark: {
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
      <ThemeProvider theme={appTheme.light}>
        <Container title="Light Theme">
          <Button>Oke</Button>
          <ButtonGroup demo onSelect={(x) => setValue(x)}>
            <Button value={1}>One</Button>
            <Button value={2}>Two</Button>
            <Button value={3}>Three</Button>
          </ButtonGroup>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
