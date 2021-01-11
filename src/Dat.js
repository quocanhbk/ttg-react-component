import React from 'react'
import Search from './components/Dropdown/Search'
import AccordionComponent from './components/Accordioncomponent'
import Badge from './components/elements/Badge'
import IcoMail from './components/icons/IcoMail'
const data = ['banana','mango','apple','fruits']
export default function Dat() {
    return (
        <div style={{padding: "24px"}}>
          <Badge icon={<IcoMail/>} value={3} max={9}/>
        </div>
    )
}


