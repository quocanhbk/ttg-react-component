import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
//Button take in error, warning, disabled, fullWidth
//rgb(237, 155, 1)
const StyledButton = styled.button`
    --clr: ${props => props.theme === "light" ? "#174091" : "#A59C87"};
    --textclr: ${props => props.theme === "light"? "white" : "#141010"};
    margin: ${props => props.demo? "8px": 
                props => props.ingroup === "left" ? "0px -2px 0px 0px" : 
                    props => props.ingroup === "right" ? "0px 0px 0px -2px" : "0px"};
    padding: ${props => props.type === "contained" ? "8px 12px" : "6px 12px"};
    transition: all 0.15s linear;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    border-color: var(--clr);
    color: ${props => props.type === "contained" ? "var(--textclr)" : "var(--clr)"};
    background-color: ${props => props.type === "contained"? "var(--clr)" : "transparent"};
    border-style: ${props => props.type === "outline" ? "solid": "none"};
    border-width: ${props => props.type === "outline" ? "2px": "0px"};
    border-radius: ${props => props.ingroup === "left" ? "8px 0px 0px 8px" : props => props.ingroup === "right" ? "0px 8px 8px 0px" : props => props.ingroup === "middle" ? "0px" : "8px"};
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    min-width: ${props => props.fullWidth ? "100%": "auto"};
    box-shadow: ${props => props.type === "contained" ? "0px 2px 4px rgba(0,0,0,0.32)" : "none"};

    &:hover { 
        --hoverclr: ${props => props.theme === "light" ? "#123374" : "#675F4C"};
        --hoverclr2: ${props => props.theme === "light" ? "#D0D8E9" : "#675F4C"};
        background: ${props => props.type === "contained" ? "var(--hoverclr)" : props => props.type === "outline" ? "var(--hoverclr2)" : "transparent"};
        color: ${props => props.type === "text" ? "var(--hoverclr)": props => props.type === "contained" ? "var(--textclr)" : "var(--clr)"};
    }
    &:focus {
        outline: none 
    }
    &:disabled { 
        color: #A3A3A3;
        background-color: ${props => props.type === "contained" ? "#CCC" : "transparent"};
        border: ${props => props.type === "outline" ? "2px solid #A3A3A3" : "none"};
    }
    &:active {
        --pressedclr: ${props => props.theme === "light" ? "#5C79B2" : "#E8DEC8"};
        color: ${props => props.type === "contained"? "var(--clr)": props => props.type === "outline"? "var(--textclr)": "var(--pressedclr)"}; 
        background-color: ${props => props.type === "contained"? "var(--textclr)": props => props.type === "outline"? "var(--clr)": "transparent"}; 
    }
`;

const Button = (props) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(["contained", "outline", "text"]),
    theme: PropTypes.oneOf(["light", "dark"])
}
Button.defaultProps = {
    type: "contained",
    theme: {
        fillColor: "#174091"
    }
}

export default Button
