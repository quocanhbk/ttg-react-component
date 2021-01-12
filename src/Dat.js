import React from 'react'
import AccordionComponent from './components/Accordioncomponent'
import Badge from './components/Badge/Badge'
import ComboBox from './components/Search/ComboBox'

const data = ['banana','mango','apple','fruits']
export default function Dat() {
    return (
        <>
          {/* <ComboBox value={data}/> */}
          <ComboBox value={data}/>
        </>
    )
}


