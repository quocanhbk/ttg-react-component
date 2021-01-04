import React, { } from 'react'
import styled from 'styled-components'

const StyledRadioGroup = styled.div`
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    flex-direction: ${props => props.horizontal ? "row" : "column"};
`

const RadioGroup = (props) =>{
    if (props.name === undefined)
        throw Error("RadioGroup need a name")
    return (
        <StyledRadioGroup {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(child, {name: props.name, onClick: () => props.onSelect(child.props.value)})
            })
        }
        </StyledRadioGroup>
    )
}
RadioGroup.defaultProps = {
    onSelect: (x) => console.log(x)
}

export default RadioGroup