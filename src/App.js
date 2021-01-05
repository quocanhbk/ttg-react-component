import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import TextInput from './components/TextInput'

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

function App() {
  return (
    <div>
      <ThemeProvider theme={appTheme.light}>
        <Container>
          <TextInput></TextInput>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
