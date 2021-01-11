import React from 'react'
import ComboBox from './components/Dropdown/ComboBox'
import AccordionComponent from './components/Accordioncomponent'
import Badge from './components/Badge/Badge'
import Search from './components/Search/Search'

const data = ['banana','mango','apple','fruits']
export default function Dat() {
    return (
        <>
          <Badge
            value="3"
            />
          {/* <ComboBox value={data}/> */}
          {/* <Search/> */}
        </>
    )
}


