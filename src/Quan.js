import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, Radio, RadioGroup, SimpleInput} from './components/elements'
import CheckboxGroup from './components/elements/CheckboxGroup'
import TableDatePicker from './components/TableDatePicker'
import ToggleGroup from './components/elements/ToggleGroup'
import Toggle from './components/elements/Toggle'
import { Router, Link } from "@reach/router"
import Slider from './components/elements/Slider'

import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Dashboard from './components/pages/Dashboard'

import theme from './utils/theme'
import {useState} from 'react'
import Breadcrumb from './components/Breadcrumb'
import { lightBlue } from '@material-ui/core/colors'


const items=[
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
]


function Quan() {
  const [mode, setMode] = useState("edit")
  const [myTheme, setTheme] = useState("light")
  const [rangeValue, setRangeValue] = useState(0)

  const onChangeSlider = e => {
    setRangeValue(parseInt(e.target.value, 10))
  }

  return (
    <div>
      <ThemeProvider theme={ theme.dark}>
        <Container title= {myTheme === "light" ? "Light Theme" : "Dark Theme"}>
          <Breadcrumb>
            {items.map(({to,label}) =>(
              <Link key={to} to={to}>{label}</Link>
            ))}
          </Breadcrumb>
          <Router>
            <Home path='/' />
            <Dashboard path='/dashboard' />
            <Contact path='/contact' />
            <Blog path='/blog' />
          </Router>
          <SimpleInput></SimpleInput>
        </Container>        
      </ThemeProvider>
    </div>
  )
}

export default Quan;
