import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Button, ButtonGroup} from './components/elements'
import Dat from './Dat'
import Quan from './Quan'
import theme from './utils/theme'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme.light}>
        <Quan/>
      </ThemeProvider>
    </div>
  )
}

export default App;
