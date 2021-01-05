import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'
import { useEffect } from "react"
import {useState} from "react"
import classNames from 'classnames';

const StyleDiv=styled.div`
    margin:10px;
    display:flex;
`;
const LabelToggle = styled.label`
    position: relative;
    display:flex;
    width: 40px;
    height: 20px;
    
`;
const StyleInput = styled.input`
    border: 0;
    height: 0;
    width:0;
    overflow: hidden;
    padding: 0;
    margin:0;
    &:checked + .toggle-switch{
        background-color: #2196F3;
    }
    &:focus + .toggle-switch{
        box-shadow: 0 0 1px #2196F3;
    }
    &:checked + .toggle-switch:before{
        -webkit-transform: translateX(18px);
        -ms-transform: translateX(18px);
        transform: translateX(18px);
    }
    &:checked ~ .toggle-switch{
        transition: 0.4s;
        background:${props => props.theme.fillColor};
    }
`;
const StyleSpan = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius:34px;
    &:before{
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 3px;
        border-radius:50%;
        bottom: 2px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }
`;
const StyleName= styled.span`
    font-size:1rem;
    display:block;
    margin: 0 10px;
    color:${props => props.theme.name === "light" ? "black" : "white"};
`;
const ToggleButton = (props) => {
    const [toggle,setToggle] = useState(false); //kiem tra khi check vao toggle
    const {defaultChecked,onChange,disabled,className} =props;
    const triggerToogle = ()=>{
        if(disabled) {return;}
        setToggle(!toggle);
        if(typeof onChange ==='function'){
            onChange(!toggle);
        }
    }
    useEffect(()=>{
        if(defaultChecked){
            setToggle(defaultChecked);
        }
    },[defaultChecked]);
    const toggleClasses = classNames('toggle', {
        'toggle--checked': toggle,
        'toggle--disabled': disabled
    }, className);
    
    return(
        <StyleDiv {...props}>     
            <StyleName>{props.children}</StyleName>
            <LabelToggle onChange={triggerToogle} className={toggleClasses}>
                <StyleInput type="checkbox" />
                <StyleSpan className="toggle-switch"/>
            </LabelToggle>
        </StyleDiv>

    )
}
ToggleButton.prototype={
    disable:PropTypes.bool,
    defaultChecked:PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    icons: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            checked: PropTypes.node,
            unchecked: PropTypes.node
        })
    ])
}
LabelToggle.defaultProps = {
    theme: {
        tClr: {R: 23, G: 64, B: 145},
        mClr: {R: 255, G: 255, B: 255},
    },
    
    name: "switch",
    displayMode: "edit"
}
export default ToggleButton;