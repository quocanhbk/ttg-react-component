import {ThemeProvider} from 'styled-components'
import { React } from "react";
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, Radio, RadioGroup, SimpleInput} from './components/elements'
import IconCheck from './components/icons/IcoCheckCircle';
import IconError from './components/icons/IcoAlertCircle';


import  Snackbar  from "./components/Snackbar";
import theme from './utils/theme'
import {useState,useRef} from 'react'


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
            <button
                onClick={() => openSnackbar()}
            >Click show success</button>
            </div>
            {isSnackbarOpen && <Snackbar
                icon={<IconCheck/>}
                message={"Success"}
                position={"topLeft"}
                type={"awdawd"}
                onClose={closeSnackbar}
                timeout={3000}
                
            />}
        </Container>        
      </ThemeProvider>
    </div>
  )
}

export default Quan;
