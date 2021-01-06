import React from 'react'
import CheckBox from './components/elements/Checkbox'
import CheckboxGroup from './components/elements/CheckboxGroup'
export default function Dat() {
    return (
        <>
            <CheckboxGroup>
                <CheckBox name="One" value="one"/>
                <CheckBox name="Two" value="two"/>
                <CheckBox name="Three" value="three"/>
            </CheckboxGroup>
        </>
    )
}
