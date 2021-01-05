import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Select} from './components/elements'
import theme from './utils/theme'
import ToggleGroup from './components/ToggleGroup'
import ToggleSwitch from './components/ToggleSwitch'
import Tabs from './components/Tabs'
import TabPane from './components/TabPane'
import Checkbox from './components/Checkbox'
import CheckboxGroup from './components/CheckboxGroup'
function App() {
  return (
    <div>
      <ThemeProvider theme={theme.light}>
        <Container title="Light Theme">
          <span>Toggle</span> 
          <CheckboxGroup fullWidth horizontal={true} name="check1">
            <Checkbox value={1}>One</Checkbox>
            <Checkbox value={2}>Two</Checkbox>
            <Checkbox value={3}>Three</Checkbox>
          </CheckboxGroup>
        </Container>
        
      </ThemeProvider>
    </div>
  )
}

export default App;
