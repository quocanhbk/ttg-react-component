import React from 'react'
import Search from './components/Dropdown/Search'
import TextInput from './components/TextInput'

const option = ["One", "Two", "Three", "Four"]
export default function Dat() {
    return (
        <Search value={option}/>
    )
}
