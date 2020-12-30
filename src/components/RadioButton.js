import React, { } from 'react'
import styled from 'styled-components'

const RadioGroup = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin: 15px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    user-select: none;
    display: ${props => props.displayDirection ? 'block' : 'inline'};

    &:hover span{
        background-color: #ccc;
        transition: 0.4s;
        width: 20px;
        height: 20px;
        -moz-box-shadow: -3px -3px 5px 0px ${props => props.color ? "#7c717b" : "#7c600b"};
        -webkit-box-shadow: -3px -3px 3px 3px ${props => props.color ? "#7c717b" : "#7c600b"};
        box-shadow: -1px -1px 3px 5px ${props => props.color ? "#7c717b" : "#7c600b"};
    }

    input:checked ~ span {
        background-color: #2196F3;
    }

    input:checked ~ .checkmark:after {
        display: block;
    }

    .checkmark:after {
        top: 9px;
        left: 9px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: red;
   }
`;

const InputRadio = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

const ValueInput = styled.strong`
   color:${props => props.color ? "blue" : "#d9ad7f"};
`;


const SpanRadio = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: ${props => props.color ? "#eee" : "#cac0c0"};
    border-radius: 50%;
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
    console.log(props.displayDirection)
    return (
        <RadioGroup name={props.name} displayDirection={props.displayDirection}>
            <ValueInput>{props.value.name}</ValueInput>
            <InputRadio type="radio" name={props.name} value={props.value} onClick={()=>handleChangeValue(props)}/>
            <SpanRadio />
        </RadioGroup>
    )
}
export default RadioButton