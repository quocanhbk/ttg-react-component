import styled from 'styled-components'
import {getDarker, getLighter} from '../utils/color'

const StyledButton = styled.button`
    --textColor: ${props => props.theme.textColor};
    --darkTextColor: ${props => getDarker(props.theme.textColor)};
    --lightTextColor: ${props => getLighter(props.theme.textColor)};
    --fillColor: ${props => props.theme.fillColor};
    --darkFillColor: ${props => getDarker(props.theme.fillColor)};
    --lightFillColor: ${props => getLighter(props.theme.fillColor)};

    margin: ${props => props.demo? "8px": "0px"};
    padding: ${props => props.ingroup ? "6px 10px" : props.type === "outline" ? "6px 10px" : "8px 12px"};
    transition: background 0.15s linear;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    outline: 0;

    border-color: var(--fillColor);
    color:${props => props.type === "contained" ? "var(--textColor)" : "var(--fillColor)"};
    background: ${props=>props.type === "contained" ? "var(--fillColor)" : "transparent"};
    flex: 1;
    border-style: solid;
    border-width: ${props => props.ingroup === "left" ? "0 1px 0 0" : props.ingroup === "right" ? "0 0 0 1px" : props.ingroup === "middle" ? "0 1px 0 1px" : props.type === "outline" ? "2px": "0px"};
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
        background-color: ${props => props.type === "contained" ? "#CCC" : "transparent"};
        border: ${props => props.type === "outline" ? "2px solid #A3A3A3" : "none"};
    }
    &:active {
        color: ${props => props.type === "contained" ? "var(--fillColor)" : props.type === "outline" ? "var(--textColor)" : "var(--lightFillColor)"};
        background: ${props => props.type === "contained" ? "var(--textColor)" : props.type === "outline" ? "var(--fillColor)" : "transparent"};
    }
`;
StyledButton.defaultProps = {
    theme: {
        textColor: "#FFFFFF",
        fillColor: "#174091"
    },
    type: "contained"
}

const Button = (props) => {
    return (
        <StyledButton {...props}>
        {props.children}
        </StyledButton>
    )
}

export default Button