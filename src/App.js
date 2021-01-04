import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {useState, useEffect} from 'react'
import {RadioGroup, Radio, Button, ButtonGroup} from './components/elements'

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
      <ThemeProvider theme={appTheme.light}>
        <Container title="Dark Theme">
          <p>Edit</p>
          <ButtonGroup horizontal displayMode="edit">
            <Button value={1}>One</Button>
            <Button value={2} default>Two</Button>
            <Button value={3}>Three</Button>
          </ButtonGroup>
          <br/>
          <p>View</p>
          <ButtonGroup horizontal displayMode="view">
            <Button value={1}>One</Button>
            <Button value={2} default>Two</Button>
            <Button value={3}>Three</Button>
          </ButtonGroup>
          <br/>
          <p>Disabled</p>
          <ButtonGroup horizontal displayMode="disabled">
            <Button value={1}>One</Button>
            <Button value={2}>Two</Button>
            <Button value={3}>Three</Button>
          </ButtonGroup>
          <br/>

        </Container>
        
      </ThemeProvider>
    </div>
  )
}

export default App;
