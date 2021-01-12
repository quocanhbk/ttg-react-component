import {ThemeProvider} from 'styled-components'
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
      <ThemeProvider theme={ theme.light}>
        <Container title= {myTheme === "light" ? "Light Theme" : "Dark Theme"}>
          <p>Avatar</p>
          <AvatarGroup  max={4}>
            <Avatar alt="Ha Thi Buoi" src={hinh} ></Avatar>
            <Avatar alt="Ha Thi Buoi" src={""} ></Avatar>
            <Avatar alt="Ha Thi Buoi" src={""} ></Avatar>
            <Avatar alt="Ha Thi Buoi" src={""} ></Avatar>
            <Avatar alt="Ha Thi Buoi" src={""} ></Avatar>
          </AvatarGroup>
          <Avatar alt="Quan Van" fluid={false} src=""></Avatar>
          <p>Breadcrumb</p>
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
          <p>Date Picker</p>
          <TableDatePicker>Don't forget</TableDatePicker>
          <p>Tabs</p>
          <Tabs name="group tab">
            <TabPane name="Tab 1" key="1" >
              Content 1
            </TabPane>
            <TabPane name="Tab 2" key="2">
              Content 2
            </TabPane>
            <TabPane name="Tab 3" key="3">
              Content 3
            </TabPane>
          </Tabs>
        </Container>        
      </ThemeProvider>
    </div>
  )
}

export default Quan;
