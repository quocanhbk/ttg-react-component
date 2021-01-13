import {ThemeProvider} from 'styled-components'
import { React } from "react";
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, Radio, RadioGroup, SimpleInput} from './components/elements'
import IconCheck from './components/icons/IcoCheckCircle';
import IconError from './components/icons/IcoAlertCircle';
import IconPlus from './components/icons/IcoEdit2';

import FB from './components/elements/FloatingActionButton';
import  Snackbar  from "./components/Snackbar";
import theme from './utils/theme'
import {useState,useRef} from 'react'
import { Icon } from '@material-ui/core';


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
        {/* <FB color="danger" size="medium"  fullWidth  icon={<IconPlus/>}>abc</FB> */}
        <FB color="danger" size="large"  icon={<IconPlus/>}></FB>
        </Container>        
      </ThemeProvider>
    </div>
  )
}

export default Quan;
