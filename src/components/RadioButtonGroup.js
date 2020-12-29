import React, { } from 'react'
import RadioButton from './RadioButton'
import styled from 'styled-components'
const TitleRadio = styled.h2`

`;

const RadioButtonGroup = (props) =>{
    console.log(props)
    const select = props.value;
    return (
        <>
        <TitleRadio>{props.title}</TitleRadio>
        {
            select.map((item, index) => {
                return(
                    <RadioButton value={item} key={index} name={props.displayField} displayDirection={props.displayDirection}/>
                )
            })
        }
        </>
    )
}

export default RadioButtonGroup