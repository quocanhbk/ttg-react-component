import React from 'react'
import ComboBox from './components/Search/ComboBox'
import Pagination from './components/Pagination/Pagination'

const data = ['banana','mango','apple','fruits']
export default function Dat() {
    return (
        <>
          {/* <ComboBox value={data}/> */}
          <Pagination totalPage={10}/>
        </>
    )
}

 

