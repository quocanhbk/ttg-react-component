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
import Table from './components/Table/Table';


const items=[
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
]
const schema = {
  "id": "",
  "name": "",
  "author": "",
  "released": ""
}

const data= [{
  "id": "1",
  "name": "Ghost in The Wires",
  "author": "Kevin Mitnick",
  "released": "08/15/2011"
},
{
  "id": "2",
  "name": "Console Wars",
  "author": "Blake J. Harris",
  "released": "05/13/2014"
},
{
  "id": "3",
  "name": "The Phoenix Project",
  "author": "Gene Kim, Kevin Behr, George Spafford",
  "released": "12/01/2017"
}]


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
          <Table headers={Object.keys(schema)} rows={data} />
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default Quan;
