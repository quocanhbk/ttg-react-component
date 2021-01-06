import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import theme from './utils/theme'
import {Checkbox, CheckBoxGroup, Radio, RadioGroup, Button, ButtonGroup} from './components/elements'
import TableDatePicker from "./components/TableDatePicker"

const data = [
  {id: 1, name:"banana"},
  {id: 2, name:"Orange"},
  {id: 3,name:"Mango"}
]

function App() {
  return (
    <div style={{display: "flex"}}>
      <ThemeProvider theme={theme.light}>
        <Container title="Light">
        <ButtonGroup demo>
            <Button value={1}>One</Button>
            <Button value={2}>Two</Button>
            <Button value={3}>Three</Button>
          </ButtonGroup>
          <TableDatePicker>Don't forget</TableDatePicker>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
