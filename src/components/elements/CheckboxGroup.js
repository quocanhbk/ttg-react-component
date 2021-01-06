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
    })

    const [value, setValue] = useState(props.children.map(child => {return {value: child.props.value, checked: child.props.default ? true : false}}))

    const handleClick = (obj) => {
        setValue([...value.filter(x => x.value !== obj.value), obj])
    }

    useEffect(() => {
        props.onSelect(value)
    })
    return (
        <StyleChkGroup {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(child, {name: props.name || (new Date()).getTime(), onSelect: (checked) => handleClick({value: child.props.value, checked: checked})})
            })
        }
        </StyleChkGroup>
    )
}
CheckboxGroup.defaultProps = {
    onSelect: (x) => console.log(x)
}

export default CheckboxGroup