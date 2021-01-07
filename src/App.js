import {ThemeProvider} from 'styled-components'
import Dat from './Dat'
import theme from './utils/theme'
import Quanh from './Quanh'
import Quan from './Quan'

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
