import React, { } from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'
const StyleChkGroup = styled.div`
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    flex-direction: ${props => props.horizontal ? "row" : "column"};
`;

const CheckboxGroup = (props) =>{
    props.children.forEach(child => {
        if (child.type !== Checkbox)
            throw Error("Children of CheckboxGroup must be Checkbox")
        else if (child.props.value === undefined)
            throw Error("Children must contain props 'value' ")
    })
    if (props.children.filter(child => child.props.default).length > 1)
        throw Error("Cannot have more than one default value")
    const handleClick = (value) => {
        props.onSelect(value)
    }
    return (
        <StyleChkGroup {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(child, {name: props.name || (new Date()).getTime(), onClick: () => handleClick(child.props.value)})
            })
        }
        </StyleChkGroup>
    )
}
CheckboxGroup.defaultProps = {
    onSelect: (x) => console.log(x)
}

export default CheckboxGroup