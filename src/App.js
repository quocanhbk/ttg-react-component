import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {useState, useEffect} from 'react'
import Select from './components/Select'

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
const data = [
  {id: 1, name: "Quanh"},
  {id: 2, name: "Tuh"}
]

function App() {
  const [value, setValue] = useState("")

  useEffect(() => {
    console.log(value)
  })

  return (
    <div>
      <ThemeProvider theme={appTheme.dark}>
        <Container title="Dark Theme">
        `<Select data={data} color="false" background="false" id="select1"></Select>`
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;
