import React, { } from 'react'
import styled from 'styled-components'

const RadioGroup = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin: 15px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 700;
    user-select: none;
    display: ${props => props.displayDirection ? 'block' : 'inline'};

    &:hover span{
        transition: 0.4s;
        box-shadow: 0px 0px 20px gray;
    }

    input:checked ~ span {
        background-color: rgb(220, 0, 78);
        border-radius: 50%;
        border-color: rgb(220, 0, 78);
        &:hover{
            width: 12px;
            height: 12px;
        }
    }

    input:checked ~ .checkmark:after {
        display: block;
    }

    .checkmark:after {
        top: -6px;
        left: -6px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid red;
   }
`;

const InputRadio = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

const ValueInput = styled.strong`
   color:${props => props.color ? "white" : "black"};
`;


const SpanRadio = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 12px;
    width: 12px;
    border:1px solid gray;
    border-radius: 50%;
    background:white;
    &:after{
        content: "";
        position: absolute;
        display: none;
    }
`;

const handleChangeValue = (value) =>{
    console.log(value);
}

const RadioButton = (props) => {
    console.log(props.border)
    return (
        <RadioGroup name={props.name} displayDirection={props.displayDirection}>
            <ValueInput color={props.color}>{props.value}</ValueInput>
            <InputRadio type="radio" name={props.name} value={props.value} onClick={()=>handleChangeValue(props)}/>
            <SpanRadio className="checkmark" border={props.border}/>
        </RadioGroup>
    )
}
export default RadioButton