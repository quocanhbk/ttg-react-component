import ButtonGroup from './components/ButtonGroup'
import Button from './components/Button'
import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import IcoBox from './components/icons/IcoBox'
import RadioButtonGroup from './components/RadioGroup'
import CheckboxGroup from './components/CheckboxGroup'
import Checkbox from './components/Checkbox'
import ToggleSwitch from './components/ToggleSwitch'
import ToggleGroup from './components/ToggleGroup'
import DropdownMenu from "./components/DropdownMenu"
import Select from "./components/Select"
import Accordioncomponent from './components/Accordioncomponent'
import Tabs from "./components/Tabs"
import TabPane from "./components/TabPane";
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
          
          <CheckboxGroup value={data} name="groupcheck1" />
          <Checkbox value="Disable" name="disable" disabled ></Checkbox>
          <Checkbox value="Auto Check" name="disable" checked disabled ></Checkbox>
          <ToggleSwitch value="Toggle Switch"></ToggleSwitch>
          <ToggleSwitch value="Toggle Switch Disable" disabled></ToggleSwitch>
          <ToggleSwitch value="Toggle Switch Auto Check" checked></ToggleSwitch>
          <ToggleGroup value={data} name="groupswitch1" displayDirection></ToggleGroup>
          
          <Tabs name="group tab">
            <TabPane name="Tab 1" key="1" >
              Content 1
            </TabPane>
            <TabPane name="Tab 2" key="2">
              Content 2
            </TabPane>
            <TabPane name="Tab 3" key="3">
              Content 3
            </TabPane>
          </Tabs>
        </Container>
      </ThemeProvider>
      <br/>
      <ThemeProvider theme={appTheme.dark}>
        <Container title="Dark Theme" dark>
           
            <CheckboxGroup value={data}  displayDirection={false} name="groupcheck2"/>
            <Checkbox value="Disable" disabled ></Checkbox>
            <Checkbox value="Auto Check" checked disabled ></Checkbox>
            <ToggleSwitch value="Toggle Switch"></ToggleSwitch>
            <ToggleSwitch value="Toggle Switch Disable" disabled></ToggleSwitch>
            <ToggleSwitch value="Toggle Switch Auto Check" checked></ToggleSwitch>
            <ToggleGroup value={data} name="groupswitch1" displayDirection={false} ></ToggleGroup>
            <Tabs name="group tab">
            <TabPane name="Tab 1" title={data}>
                Content of Tab Pane 1
            </TabPane>
            <TabPane name="Tab 2" title={data} >
                Content of Tab Pane 2
            </TabPane>
            <TabPane name="Tab 3" title={data} >
                Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
