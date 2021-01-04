import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
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
        textColor: "#FFFFFF",
        fillColor: "#174091"
    },
    dark: {
        textColor: "#000000",
        fillColor: "#A59C87"
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
        <Container title="Light Theme">
          <Button demo>Contained</Button>
          <Button fullWidth>Contained</Button>
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
            <RadioButtonGroup value={data} name="group 2" displayDirection={false} title="Radio button" color="true" border="true"/>
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
