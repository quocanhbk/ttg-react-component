import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const NewButton = styled.button`
    --mainColor: props.theme.mainColor
    --textColor: props.theme.textColor
    margin: ${props => props.demo? "8px": 
                props => props.ingroup === "left" ? "0px -2px 0px 0px" : 
                    props => props.ingroup === "right" ? "0px 0px 0px -2px" : "0px"};
    padding: ${props => props.type === "outline" ? "6px 10px" : "8px 12px"};
    transition: background 0.15s linear;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    border-color: rgb(${props => props.theme.mainColor.r}, ${props => props.theme.mainColor.r});
    outline: 0;
    color: ${props => props.type === "contained" ? props => props.theme.textColor : props => props.theme.mainColor};
    background-color: ${props => props.type === "contained"? props => props.theme.mainColor : "transparent"};
    border-style: ${props => props.type === "outline" ? "solid": "none"};
    border-width: ${props => props.type === "outline" ? "2px": "0px"};
    border-radius: ${props => props.ingroup === "left" ? "8px 0px 0px 8px" : 
                        props => props.ingroup === "right" ? "0px 8px 8px 0px" : 
                            props => props.ingroup === "middle" ? "0px" : "8px"};
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    min-width: ${props => props.fullWidth ? "100%": "auto"};
    box-shadow: ${props => props.type === "contained" ? "0px 2px 4px rgba(0,0,0,0.32)" : "none"};

    &:hover { 
        background: ${props => props.type === "contained" ? props => props.theme.hoverColor1 : 
                        props => props.type === "outline" ? props => props.theme.hoverColor2 : 
                            "transparent"};
        color: ${props => props.type === "text" ? props => props.theme.hoverColor1 : 
                        props => props.type === "contained" ? props => props.theme.textColor : 
                            props => props.theme.mainColor};
    }
    &:disabled { 
        color: #A3A3A3;
        background-color: ${props => props.type === "contained" ? "#CCC" : "transparent"};
        border: ${props => props.type === "outline" ? "2px solid #A3A3A3" : "none"};
    }
    &:active {
        color: ${props => props.type === "contained"? props => props.theme.mainColor: 
                    props => props.type === "outline"? props => props.theme.textColor: 
                        props => props.theme.pressColor}; 
        background-color: ${props => props.type === "contained"? props => props.theme.textColor: 
                                props => props.type === "outline"? props => props.theme.mainColor: 
                                    "transparent"}; 
    }
`;
NewButton.defaultProps = {
    theme: {
        mainColor: {r:23,g:64,b:145},
        textColor: {r:255,g:255,b:255},
    },
    type: "contained",
    mode: "normal"
}
export default NewButton