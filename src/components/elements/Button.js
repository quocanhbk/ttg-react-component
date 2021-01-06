import styled from 'styled-components'
import {getDarker, getLighter} from '../../utils/color'

const StyledButton = styled.button`
    --textColor: ${props => props.theme.backgroundColor};
    --darkTextColor: ${props => getDarker(props.theme.backgroundColor)};
    --lightTextColor: ${props => getLighter(props.theme.backgroundColor)};
    --fillColor: ${props => props.theme.fillColor};
    --darkFillColor: ${props => getDarker(props.theme.fillColor)};
    --lightFillColor: ${props => getLighter(props.theme.fillColor)};
    
    margin: ${props => props.demo? "8px": "0px"};
    padding: ${props => props.ingroup ? "4px 10px" : props.type === "outline" ? "4px 10px" : "6px 12px"};
    transition: background 0.15s linear;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};
    border-color: var(--fillColor);
    color:${props => props.type === "contained" ? "var(--textColor)" : "var(--fillColor)"};
    background: ${props=>props.type === "contained" ? "var(--fillColor)" : "transparent"};
    flex: 1;
    border-style: solid;
    border-width: ${props => props.ingroup === "left" ? "0 1px 0 0" : props.ingroup === "right" ? "0 0 0 1px" : props.ingroup === "middle" ? "0 1px 0 1px" : props.type === "outline" ? "2px": "0px"};
    border-color: #174091;
    border-radius: ${props => props.ingroup ? "0" : "8px"};
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    width: ${props => props.fullWidth ? "100%": "auto"};
    box-shadow: ${props => props.type === "contained" ? "0px 2px 4px rgba(0,0,0,0.32)" : "none"};
    &:hover {
        color: ${props => props.type === "contained" ? "var(--textColor)" : props.type === "outline" ? "var(--fillColor)" : "var(--darkFillColor)"};
        background: ${props => props.type === "contained" ? "var(--lightFillColor)" : props.type === "outline" ? "var(--darkTextColor)" : "transparent"};
    }
    &:disabled { 
        color: #A3A3A3;
        background-color: red;
        border-color: ${props => props.type === "outline" ? "#A3A3A3" : "transparent"};
    }
    &:active {
        color: ${props => props.type === "contained" ? "var(--fillColor)" : props.type === "outline" ? "var(--textColor)" : "var(--lightFillColor)"};
        background: ${props => props.type === "contained" ? "var(--textColor)" : props.type === "outline" ? "var(--fillColor)" : "transparent"};
    }
`;
StyledButton.defaultProps = {
    type: "contained",
    displayMode: "edit"
}

const Button = (props) => {
    return (
        <StyledButton {...props} disabled={props.displayMode === "disabled" || props.disabled}>
        {props.children}
        </StyledButton>
    )
}

export default Button