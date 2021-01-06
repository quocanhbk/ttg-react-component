import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'
const StyleChkGroup = styled.div`
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    flex-direction: ${props => props.horizontal ? "row" : "column"};
`;

const CheckboxGroup = (props) =>{
    useEffect(() => {
        props.children.forEach(child => {
            if (child.type !== Checkbox)
                throw Error("Children of CheckboxGroup must be Checkbox")
            else if (child.props.value === undefined)
                throw Error("Children must contain props 'value' ")
        })
        if (props.children.filter(child => child.props.default).length > 1)
            throw Error("Cannot have more than one default value")
    })
    const [value, setValue] = useState([])

    const handleClick = (obj) => {
        //props.onSelect(value)
        setValue([...value.filter(x => x.value !== obj.value), obj])
    }
    useEffect(() => {
        console.log(value)
    })
    return (
        <StyleChkGroup {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(child, {name: props.name || (new Date()).getTime(), onSelect: (e) => handleClick({value: child.props.value, checked: e.target.checked})})
            })
        }
        </StyleChkGroup>
    )
}
CheckboxGroup.defaultProps = {
    onSelect: (x) => console.log(x)
}

export default CheckboxGroup