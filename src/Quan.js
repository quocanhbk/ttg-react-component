import {ThemeProvider} from 'styled-components'
import { React } from "react";
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, Radio, RadioGroup, SimpleInput} from './components/elements'
import CheckboxGroup from './components/elements/CheckboxGroup'
import TableDatePicker from './components/TableDatePicker'
import ToggleGroup from './components/elements/ToggleGroup'
import Toggle from './components/elements/Toggle'
import Slider from './components/elements/Slider'
import Tabs from './components/Tabs'
import TabPane from './components/TabPane'
import {Router, Link} from '@reach/router'
import Avatar from './components/Avatar'
import AvatarGroup from './components/AvatarGroup'
import hinh from "./components/gai2.jpg";

import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Dashboard from './components/pages/Dashboard'
import  Snackbar  from "./components/Snackbar";
import theme from './utils/theme'
import {useState,useRef} from 'react'
import Breadcrumb from './components/elements/Breadcrumb'
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
  const [ isSnackbarOpen, setIsSnackbarOpen ] = useState(null);
  const openSnackbar = () => {
    setIsSnackbarOpen(true);
};

  const closeSnackbar = () => setIsSnackbarOpen(false);
  
  return (
    <div>
      <ThemeProvider theme={ theme.light}>
        <Container title= {myTheme === "light" ? "Light Theme" : "Dark Theme"}>
            <div>
            <Button
                  disabled={isSnackbarOpen}
                onClick={() => openSnackbar()}
            >Click show alert</Button>
            </div>
            {isSnackbarOpen && <Snackbar
                message={"Hello every body"}
                position={"bottomCenter"}
                type={"success"}
                onClose={closeSnackbar}
                timeout={3000}
                
            />}
        </Container>        
      </ThemeProvider>
    </div>
  )
}

export default Quan;
