import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from './Button';

const StyledButtonGroup = styled.div`
    --fillColor: ${props => props.theme.fillColor};

    margin: ${props => props.demo ? "8px": "0px"};
    padding: 0px;
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    align-items: flex-start;
    min-width: ${props => props.fullWidth ? "100%" : "auto"};
    border: 2px solid ${props => props.displayMode === "disabled" ? "#A3A3A3" : "var(--fillColor)"};
    border-radius: 8px;
    overflow: hidden;
`;

const ButtonGroup = (props) => {

    const [value, setValue] = useState(props.children.find(child => child.props.default).props.value)

    useEffect(() => {
        // Catching errors
        console.log(props.children.map(child => child.props.default))
        props.children.forEach(child => {
            if (child.type !== Button)
                throw Error("Children of ButtonGroup must be Button")
            else if (child.props.value === undefined)
                throw Error("Children must contain props 'value' ")
        })
        if (props.children.filter(child => child.props.default).length > 1)
            throw Error("Cannot have more than one default value")
    }, [props])

    useEffect(() => {
        if (value) props.onSelect(value)
    })
    
    return (
        <StyledButtonGroup {...props}>
            {React.Children.map(props.children, (child, idx) => {
                return React.cloneElement(
                    child, 
                    {
                        fullWidth: false, demo: false, displayMode: props.displayMode,
                        ingroup: idx === 0 ? "left" : idx === props.children.length - 1 ? "right" : "middle", 
                        type: value === child.props.value ? "contained": "outline", 
                        onClick: () => setValue(child.props.value)})
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
