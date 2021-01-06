import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Button, ButtonGroup} from './components/elements'
import Dat from './Dat'
import Quanh from './Quanh'
import theme from './utils/theme'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme.light}>
        <Quanh/>
      </ThemeProvider>
    </div>
  )
}

export default App;
