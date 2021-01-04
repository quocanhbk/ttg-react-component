import React, {useState} from 'react'
import styled from 'styled-components'
import Button from './Button';

const StyledButtonGroup = styled.div`
    --fillColor: ${props => props.theme.fillColor};

    margin: ${props => props.demo? "8px": "0"};
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    min-width: ${props => props.fullWidth ? "100%": "auto"};
    border: 2px solid var(--fillColor);
    border-radius: 8px;
    overflow: hidden;
`;
StyledButtonGroup.defaultProps = {
    theme: {
        textColor: "#FFFFFF",
        fillColor: "#174091"
    }
}
const ButtonGroup = (props) => {
    props.children.forEach(child => {
        if (child.type !== Button)
            throw Error("Children of ButtonGroup must be Button")
        else if (child.props.value === undefined)
            throw Error("Children must contain props 'value' ")
    })
    const [Value, setValue] = useState(props.defaultValue)
    let attr = {
        fullWidth: false,
        demo: false
    }
    const handleClick = (x) => {
        setValue(x)
        props.onSelect(x)
    }
    return (
        <StyledButtonGroup {...props}>
            {React.Children.map(props.children, (child, idx) => {
                return React.cloneElement(
                    child, 
                    {
                        ...attr, 
                        ingroup: idx === 0 ? "left" : idx === props.children.length - 1 ? "right" : "middle", 
                        type: Value === child.props.value ? "contained": "outline", 
                        onClick: () => handleClick(child.props.value)})
            })}
        </StyledButtonGroup>
    )
}

ButtonGroup.defaultProps = {
    onSelect: (x) => console.log(x),
    defaultValue: ""
}
export default ButtonGroup
