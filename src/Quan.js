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
import TablePagination from './components/TablePagination/TablePagination'


const items=[
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
]
const title = {
  "id": "",
  "name": "",
  "author": "",
  "released": ""
}

const data= [
  {"id": "1","name": "Apple","author": "Kevin Mitnick","released": "08/15/2011"},{"id": "2","name": "SamSung","author": "Blake J. Harris","released": "05/13/2014"},
  {"id": "3","name": "Xiaomi","author": "Gene Kim","released": "12/01/2017"},{"id": "4","name": "Huawei","author": "Kevin Desar","released": "08/15/2011"},
  {"id": "5","name": "Sony","author": "KAX","released": "08/15/2011"},{"id": "6","name": "Oppo","author": "DAT","released": "17/03/2020"},
  {"id": "7","name": "Apple","author": "Kevin Mitnick","released": "08/15/2011"},{"id": "8","name": "SamSung","author": "Blake J. Harris","released": "05/13/2014"},
  {"id": "9","name": "Xiaomi","author": "Gene Kim","released": "12/01/2017"},{"id": "10","name": "Huawei","author": "Kevin Desar","released": "08/15/2011"},
  {"id": "11","name": "Sony","author": "KAX","released": "08/15/2011"},{"id": "12","name": "Oppo","author": "DAT","released": "17/03/2020"},
  {"id": "13","name": "Sony","author": "KAX","released": "08/15/2011"},{"id": "14","name": "Oppo","author": "DAT","released": "17/03/2020"},
  {"id": "15","name": "Sony","author": "KAX","released": "08/15/2011"},{"id": "16","name": "Oppo","author": "DAT","released": "17/03/2020"},
  {"id": "17","name": "Sony","author": "KAX","released": "08/15/2011"},{"id": "18","name": "Oppo","author": "DAT","released": "17/03/2020"}]

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
  
  // lay ra phan tu cua mang
var count = data.length
// so cot hien thi
var pageSize = 3;
// so table
var page = Math.ceil(count/pageSize)
// console.log(page
  return (
    <div>
      <ThemeProvider theme={ theme.light}>
        <Container title= {myTheme === "light" ? "Light Theme" : "Dark Theme"}>
          {/* <Table headers={Object.keys(title)} rows={data} /> */}
          <TablePagination
            headers={Object.keys(title)}
            rows={data}
            totalPage={page}
            pageSize={pageSize}
          />
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default Quan;
