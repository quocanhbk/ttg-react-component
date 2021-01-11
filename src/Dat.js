import React from 'react'
import Search from './components/Dropdown/Search'
import Select from "./components/Select/Select"

const data = ['banana','mango','apple','fruits']
export default function Dat() {
    return (
        <>
          <Search value={data}/>
        </>
    )
}
