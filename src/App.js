import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import Button from './components/elements/Button'
import ButtonGroup from './components/elements/ButtonGroup'

const appTheme = {
  light: {
    name: "light",
    textColor: "#FFFFFF",
    fillColor: "#174091",
    toggleColor: "#174091"
},
dark: {
    name: "dark",
    textColor: "#000000",
    fillColor: "#A59C87",
    toggleColor: "transparent"
}
}

const data = [
  {id: 1, name:"Apple"},
  {id: 2, name:"Banana"},
  {id: 3, name:"Orange"},
  {id: 4, name:"Mango"},
  {id: 5, name:"Kiwi"}
]

function App() {
  return (
    <div>
      <ThemeProvider theme={appTheme.light}>
        <Container>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
