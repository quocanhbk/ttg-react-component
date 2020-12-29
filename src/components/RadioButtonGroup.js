import React, { } from 'react'
import RadioButton from "./RadioButton"

const RadioButtonGroup = (props) =>{
    const select = props.value;
    return (
        <>
        {
            select.map((item, index) => {
                return(
                    <RadioButton value={item} key={index} name={props.name}/>
                )
            })
        }
        </>
    )
}

export default RadioButtonGroup