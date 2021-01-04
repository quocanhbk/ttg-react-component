import React, { } from 'react'
import Checkbox from "./Checkbox"
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
                return React.cloneElement(child, {name: props.name})
            })
        }
        </StyleChkGroup>
    )
}


export default CheckboxGroup