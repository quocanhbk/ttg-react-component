import ButtonGroup from './components/ButtonGroup'
import Button from './components/Button'
import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import IcoBox from './components/icons/IcoBox'
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
  {id: 1, name: "Apple"},
  {id: 2, name: "Orange"},
  {id: 3, name: "Jackfruit"},
  {id: 4, name: "Banana"},
  {id: 5, name: "Strawberry "},
  {id: 6, name: "Coconut"}
]

function App() {
  return (
    <div>
      <ThemeProvider theme={appTheme.light}>
        <Container title="Light Theme">
          <Button onClick={() => alert("Woo")} demo>Contained</Button>
          <Button demo disabled>Disabled Contained</Button>
          <Button demo type="outline">Outline</Button>
          <Button demo type="outline" disabled>Disabled Outline</Button>
          <Button demo type="text">Text</Button>
          <Button demo><IcoBox left/> With Icon</Button>
          <Button demo disabled><IcoBox left/> Disabled</Button>
          <ButtonGroup fullWidth data={data} displayField="name" returnField="id"/>
        </Container>
      </ThemeProvider>
      <br/>
      <ThemeProvider theme={appTheme.dark}>
        <Container title="Dark Theme" dark>
            <Button onClick={() => alert("Woo")} demo>Contained</Button>
            <Button demo disabled>Disabled Contained</Button>
            <Button demo type="outline">Outline</Button>
            <Button demo type="outline" disabled>Disabled Outline</Button>
            <Button demo type="text">Text</Button>
            <Button demo><IcoBox left/> With Icon</Button>
            <Button demo disabled><IcoBox left/> Disabled</Button>
            <ButtonGroup fullWidth data={data} displayField="name" returnField="id"/>
          </Container>
      </ThemeProvider>
      
    </div>
  )
}

export default App;
