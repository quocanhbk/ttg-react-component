import React, { } from 'react'
import styled from 'styled-components'

const StyleChkGroup = styled.div`
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    flex-direction: ${props => props.horizontal ? "row" : "column"};
`;

const CheckboxGroup = (props) =>{
    if (props.name === undefined)
        throw Error("CheckboxGroup need a name")
    return (
        <StyleChkGroup {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(child, {name: props.name,onClick:()=> props.onSelect(child.props.value)})
            })
        }
        </StyleChkGroup>
    )
}
CheckboxGroup.defaultProps = {
    onSelect: (x) => console.log(x)
}

export default CheckboxGroup