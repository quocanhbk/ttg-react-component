import React, { } from 'react'
import styled from 'styled-components'

    const StyleGroup = styled.div`
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    flex-direction: ${props => props.horizontal ? "row" : "column"};
    &>div{
        justify-content: ${props => props.horizontal ? "" : "space-between"}
    }
`;
const ToggleGroup = (props) =>{
    if (props.name === undefined)
        throw Error("ToggleGroup need a name")
    return (
        <StyleGroup {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(child, {name: props.name,onClick:()=> props.onSelect(child.props.value)})
            })
        }
        </StyleGroup>
    )
}
ToggleGroup.defaultProps = {
    onSelect: (x) => console.log(x)
}
export default ToggleGroup