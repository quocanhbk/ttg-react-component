import {ThemeProvider} from 'styled-components'
import Dat from './Dat'
import theme from './utils/theme'
import Quanh from './Quanh'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme.light}>
        <Dat/>
      </ThemeProvider>
    </div>
  )
}

export default App;
