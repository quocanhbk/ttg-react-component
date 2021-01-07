//Made by La Quoc Anh
import React from 'react'
import styled from 'styled-components'
import { getFader } from '../../utils/color'
import PropTypes from 'prop-types'
const StyledInput = styled.input`
    color: ${props => props.theme.textColor};
    padding: 4px 8px;
    border: 2px solid ${props => getFader(props.theme.fillColor, 0.4)};
    outline: 0;
    border-radius: 5px;
    font-size: ${props => props.theme.textSize.medium};
    transition: border 0.15s linear;
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    width: ${props => props.fullWidth ? "100%" : "auto"};
    pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};
    background-color: transparent;
    
    &:disabled {
        color: ${props => props.theme.disabledTextColor};
        border-color: ${props => props.theme.disabledFillColor};
    }

    &:focus {
        border-color: ${props => props.theme.fillColor};
    }
   

`;

const SimpleInput = (props) => {
    return <StyledInput 
                type="text" {...props} 
                disabled={props.displayMode === "disabled" || props.disabled} 
                spellCheck="false"
                defaultValue={props.default}
                placeholder={props.placeholder}
            />
}

SimpleInput.propTypes = {
    placeholder: PropTypes.string,
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"]),
    fullWidth: PropTypes.bool,
    default: PropTypes.string
}
SimpleInput.defaultProps = {
    placeholder: "",
    default: "",
    displayMode: "edit",
    fullWidth: false
}

export default SimpleInput
