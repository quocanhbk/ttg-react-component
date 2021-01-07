import {ThemeProvider} from 'styled-components'
import Dat from './Dat'
import Quanh from './Quanh'
import Quan from './Quan'
import theme from './utils/theme'

import {useState} from 'react'
function App() {
  const [value, setValue] = useState(1)
  return (
    <div>
      <ThemeProvider theme={theme.light}>
        <Dat/>
      </ThemeProvider>
    </div>
  )
}

export default App;
