import React, { } from 'react'
import styled from 'styled-components'
const FormCotrol = styled.div`

`;
const LabelRadioGroup = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin: 15px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
    display: inline;

    &:hover span{
        background-color: #ccc;
        transition: 0.4s;
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

const LabelRadio = styled.p`
   color: black;
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
    return (
        <LabelRadioGroup>
            <ValueInput>{props.value}</ValueInput>
            <InputRadio type="radio" name="radio" value={props.value} onClick={()=>handleChangeValue(props.value)}/>
            <SpanRadio />
        </LabelRadioGroup>
    )
}
export default RadioButton