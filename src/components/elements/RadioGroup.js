import React, { useEffect } from 'react'
import RadioButton from './RadioButton'
import styled from 'styled-components'

const StyledRadioGroup = styled.div`
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    flex-direction: ${props => props.horizontal ? "row" : "column"};
`

const RadioGroup = (props) => {
    //Catching errors
    props.children.forEach(child => {
        if (child.type !== RadioButton)
            throw Error("Children of RadioGroup must be RadioButton")
        else if (child.props.value === undefined)
            throw Error("Children must contain props 'value' ")
    })
    if (props.children.filter(child => child.props.default).length > 1)
        throw Error("Cannot have more than one default value")
    const handleClick = (value) => {
        props.onSelect(value)
    }
    useEffect(() => {
        let defElement = props.children.find(child => child.props.default)
        if (defElement) {
            handleClick(defElement.props.value)
        }
    }, [])
    return (
        <StyledRadioGroup {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(child, {name: props.name || (new Date()).getTime(), onClick: () => handleClick(child.props.value)})
            })
        }
        </StyledRadioGroup>
    )
}
RadioGroup.defaultProps = {
    onSelect: (x) => console.log(x)
}

export default RadioGroup