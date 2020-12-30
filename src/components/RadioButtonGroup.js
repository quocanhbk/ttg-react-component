import React, { } from 'react'
import RadioButton from './RadioButton'
import styled from 'styled-components'
const TitleRadio = styled.h2`

`;

const RadioButtonGroup = (props) =>{
    const select = props.value;
    return (
        <>
        <TitleRadio>{props.title}</TitleRadio>
        {
            select.map((item, index) => {
                return(
                    <RadioButton value={item.name} key={index} name={props.name} displayDirection={props.displayDirection}/>
                )
            })
        }
        </>
    )
}

export default RadioButtonGroup