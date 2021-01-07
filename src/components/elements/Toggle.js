import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'
import { useEffect } from "react"
import {useState} from "react"
import classNames from 'classnames';

const StyleDiv=styled.div`
    display:flex;
    padding: 4px 8px 4px 0;
    align-items:center;
`;
const LabelToggle = styled.label`
    position: relative;
    display:flex;
    width: 40px;
    height: 20px;
    pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};

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
    margin: 0 5px;
    color: ${props => props.displayMode === "disabled" ? "#A3A3A3": props.theme.textColor};

`;
const Toggle = (props) => {
    const [toggle,setToggle] = useState(false); //kiem tra khi check vao toggle
    const [checked, setChecked] = useState(props.default)
    const {defaultChecked,onChange,disabled,className} = props;
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
    
    const handleSelect = (e) => {
        setChecked(e.target.checked)
        props.onSelect(e.target.value, e.target.checked)
    }

    return(
        <StyleDiv {...props}>     
            <StyleName displayMode={props.disabled ? "disabled" : props.displayMode}>{props.children}</StyleName>
            <LabelToggle displayMode={props.disabled ? "disabled" : props.displayMode} onChange={triggerToogle} className={toggleClasses}>
                <StyleInput  displayMode={props.disabled ? "disabled" : props.displayMode} 
                type="checkbox"
                name={props.name} 
                value={props.value} 
                onChange={handleSelect} 
                defaultChecked={props.default}
                />
                <StyleSpan className="toggle-switch"/>
            </LabelToggle>
        </StyleDiv>

    )
}
Toggle.propTypes = {
    disabled:PropTypes.bool,
    defaultChecked:PropTypes.bool,
    className: PropTypes.string,
    name:PropTypes.string,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    displayMode: PropTypes.string
}
Toggle.defaultProps = {
    onSelect: (x,y) => console.log(x,y),
    defaultChecked: false,
    displayMode: "edit"
}

export default Toggle;
