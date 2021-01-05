import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Button, ButtonGroup, Radio, RadioGroup} from './components/elements'

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
      <ThemeProvider theme={appTheme.light}>
        <Container title="Light Theme">
          <p>Edit</p>
          <ButtonGroup>
            <Button value={1}>One</Button>  
            <Button value={2}>Two</Button>  
            <Button value={3}>Three</Button>  
          </ButtonGroup>          
          <p>View</p>
          <ButtonGroup displayMode="view">
            <Button value={1}>One</Button>  
            <Button value={2}>Two</Button>  
            <Button value={3}>Three</Button>  
          </ButtonGroup>          
          <p>Disabled</p>
          <ButtonGroup displayMode="disabled">
            <Button value={1}>One</Button>  
            <Button value={2}>Two</Button>  
            <Button value={3} default>Three</Button>  
          </ButtonGroup>          
        </Container>
        <Container title="Light Theme">
          <p>Edit</p>
          <RadioGroup horizontal>
            <Radio value={1}>One</Radio>  
            <Radio value={2}>Two</Radio>  
            <Radio value={3}>Three</Radio>  
          </RadioGroup>          
          <p>View</p>
          <RadioGroup displayMode="view" horizontal>
            <Radio value={1}>One</Radio>  
            <Radio value={2}>Two</Radio>  
            <Radio value={3}>Three</Radio>  
          </RadioGroup>          
          <p>Disabled</p>
          <RadioGroup displayMode="disabled" horizontal>
            <Radio value={1}>One</Radio>  
            <Radio value={2}>Two</Radio>  
            <Radio value={3} default>Three</Radio>  
          </RadioGroup>          
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
