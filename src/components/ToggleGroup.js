import React, { } from 'react'
import styled from 'styled-components'
import  ToggleSwitch  from './ToggleSwitch'

    const StyleGroup = styled.div`
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    flex-direction: ${props => props.horizontal ? "row" : "column"};
    &>div{
        justify-content: ${props => props.horizontal ? "" : "space-between"}
    }
`;
const ToggleGroup = (props) =>{
    props.children.forEach(child => {
        if (child.type !== ToggleSwitch)
            throw Error("Children of ToggleGroup must be ToggleSwitch")
        else if (child.props.value === undefined)
            throw Error("Children must contain props 'value' ")
    })
    if (props.children.filter(child => child.props.default).length > 1)
        throw Error("Cannot have more than one default value")
    const handleClick = (value) => {
        props.onSelect(value)
    }
    return (
        <StyleGroup {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(child, {name: props.name || (new Date()).getTime(), onClick: () => handleClick(child.props.value)})
            })
        }
        </StyleGroup>
    )
}
ToggleGroup.defaultProps = {
    onSelect: (x) => console.log(x)
}
export default ToggleGroup