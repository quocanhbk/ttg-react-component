import ButtonGroup from './components/ButtonGroup'
import Button from './components/Button'
import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import IcoBox from './components/icons/IcoBox'
import RadioButtonGroup from './components/RadioButtonGroup'
import DropdownMenu from "./components/DropdownMenu"
import Select from "./components/Select"
import Accordioncomponent from './components/Accordioncomponent'
import FormDate from './components/FormDate'
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
          <RadioButtonGroup value={data} name="group 1" displayDirection  title="Radio button"/>
          <DropdownMenu data={data} value="Dropdown"/>
          <Select 
            data={data}
            id="select1"
          />
          <Accordioncomponent 
            background
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            title="Hello word 1"
          />
          <FormDate 
            id="date1"
            title="select day"
          />
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
            <RadioButtonGroup value={data} name="group 2" displayDirection={false} title="Radio button" color="true"/>
            <DropdownMenu data={data} value="Dropdown" color="true"/>
            <Select
              color="true"
              background="true" 
              data={data} 
              id="select2"/>
            <Accordioncomponent
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
              title="hello world 2"
            />
            <FormDate 
              color="true" 
              id="date2"
              title="Select day 2"
            />
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
