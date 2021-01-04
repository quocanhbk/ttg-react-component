import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {useState, useEffect} from 'react'
import {RadioGroup, Radio, Button, ButtonGroup} from './components/elements'

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


function App() {
  return (
    <div>
      <ThemeProvider theme={appTheme.dark}>
        <Container title="Dark Theme">
          <Button displayMode="edit" onClick={() => console.log("Clicked")}>Edit</Button>
          <Button displayMode="view" onClick={() => console.log("Clicked")}>View</Button>
          <Button disabled onClick={() => console.log("Clicked")}>Disabled</Button>
          <ButtonGroup displayMode="view">
            <Button value={1}>One</Button>
            <Button value={2} default>Two</Button>
            <Button value={3}>Three</Button>
          </ButtonGroup>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
