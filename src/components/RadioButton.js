import React, { useState } from 'react'
import styled from 'styled-components'

const LabelRadioButton = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin: 12px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
    display: inline;

    &:hover span{
        background-color: #ccc;
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
        background: white;
   }
`;

const InputRadio = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

const SpanRadio = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
    &:after{
        content: "";
        position: absolute;
        display: none;
    }
`;


const RadioButton = (props) => {
    return (
        <LabelRadioButton>
            {props.value}
            <InputRadio type="radio" checked="checked" name="radio"/>
            <SpanRadio/>
        </LabelRadioButton>
    )
}
export default RadioButton