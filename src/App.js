import {ThemeProvider} from 'styled-components'
import Dat from './Dat'
import Quanh from './Quanh'
import Quan from './Quan'
import TextInput from './components/elements/TextInput'
import SimpleInput from './components/elements/SimpleInput'
import theme from './utils/theme'

import {useState} from 'react'
import Box from './components/Box'
import Container from './components/Container'
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
