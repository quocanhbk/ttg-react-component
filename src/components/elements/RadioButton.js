import React, { } from 'react'
import styled from 'styled-components'
import {getFader} from '../utils/color'
const Radio = styled.label`
    display: inline-block;
    position: relative;
    padding: 4px 8px 4px 1.5rem;
    margin-right: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    user-select: none;
    flex: 1;

`;

const InputRadio = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;

    //update the dot when checked
    &:checked ~ span:after {
        background-color: ${props => props.theme.fillColor};
        border-radius: 50%;
    }
`;

const ValueInput = styled.p`
    color:${props => props.theme.name === "light" ? "black" : "white"};
    display: inline-block;
`;


const SpanRadio = styled.span`
    // the ring
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0rem;
    height: 1.2rem;
    width: 1.2rem;
    border: 2px solid ${props => props.theme.fillColor};
    border-radius: 50%;
    background: transparent;

    &:hover {
        box-shadow: 0px 0px 16px ${props => getFader(props.theme.fillColor, 0.8)};
    }

    //the dot
    &::after {
        content: "";
        position: absolute;
        display: inline-block;
        top: 50%;
        transform: translate(-50%,-50%);
        left: 50%;
        height: 0.6rem;
        width: 0.6rem;
        border-radius: 50%;
        background: transparent;
        transition: background 0.15s linear;
   }
`;

const RadioButton = (props) => {
    return (
        <Radio {...props}>
            <ValueInput>{props.children}</ValueInput>
            <InputRadio type="radio" name={props.name} value={props.value} defaultChecked={props.default}/>
            <SpanRadio/>
        </Radio>
    )
}
export default RadioButton