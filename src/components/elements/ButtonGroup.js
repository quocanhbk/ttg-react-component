import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from './Button';

const StyledButtonGroup = styled.div`
    --fillColor: ${props => props.theme.fillColor};
    position: relative;
    margin: ${props => props.demo? "8px": "0"};
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    min-width: ${props => props.fullWidth ? "100%": "auto"};
    border: 2px solid ${props => props.displayMode === "disabled" ? "#A3A3A3" : "var(--fillColor)"};
    border-radius: 8px;
    overflow: hidden;
`;
StyledButtonGroup.defaultProps = {
    theme: {
        name: "light",
        textColor: "#FFFFFF",
        fillColor: "#174091"
    }
}
const Cover = styled.div`
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 2px solid transparent;
`;
const ButtonGroup = (props) => {
    //Catching errors
    props.children.forEach(child => {
        if (child.type != Button)
            throw Error("Children of ButtonGroup must be Button")
        else if (child.props.value === undefined)
            throw Error("Children must contain props 'value' ")
    })

    if (props.children.filter(child => child.props.default).length > 1)
        throw Error("Cannot have more than one default value")

    const [Value, setValue] = useState(props.defaultValue)

    useEffect(() => {
        let defElement = props.children.find(child => child.props.default)
        if (defElement) {
            handleClick(defElement.props.value)
        }
    }, [])

    const handleClick = (x) => {
        setValue(x)
        props.onSelect(x)
    }
    return (
        <StyledButtonGroup {...props}>
            {props.displayMode !== "edit" && <Cover/>}
            {React.Children.map(props.children, (child, idx) => {
                return React.cloneElement(
                    child, 
                    {
                        fullWidth: false, demo: false, disabled: props.displayMode === "disabled",
                        ingroup: idx === 0 ? "left" : idx === props.children.length - 1 ? "right" : "middle", 
                        type: Value === child.props.value ? "contained": "outline", 
                        onClick: () => handleClick(child.props.value)})
            })}
        </StyledButtonGroup>
    )
}

ButtonGroup.defaultProps = {
    onSelect: (x) => console.log(x),
    defaultValue: "",
    displayMode: "edit"
}
export default ButtonGroup
