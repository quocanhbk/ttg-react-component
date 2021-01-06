import React, { useEffect,useState} from 'react'
import styled from 'styled-components'
import  ToggleSwitch  from './ToggleSwitch'

    const StyleGroup = styled.div`
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    flex-direction: ${props => props.horizontal ? "row" : "column"};
    &>div{
        justify-content: ${props => props.horizontal ? "" : "space-between"}
    }
    &>div>span{
        order:${props => props.position ? '2' : '1'};
    }
    &>div>label{
        order:${props => props.position ? '1' : '2'};
    }
`;
const ToggleGroup = (props) =>{
    useEffect(() => {
        props.children.forEach(child => {
            if (child.type !== ToggleSwitch)
                throw Error("Children of ToggleGroup must be ToggleSwitch")
            else if (child.props.value === undefined)
                throw Error("Children must contain props 'value' ")
        })
    })

    const [value, setValue] = useState(props.children.map(child => {return {value: child.props.value, checked: child.props.default}}))

    const handleClick = (obj) => {
        setValue([...value.filter(x => x.value !== obj.value), obj])
    }

    useEffect(() => {
        props.onSelect(value)
    })
    return (
        <StyleGroup {...props}>
        {
             React.Children.map(props.children, child => {
                return React.cloneElement(
                    child, {
                        name: props.name || (new Date()).getTime(), 
                        onSelect: (checked) => handleClick({value: child.props.value, checked: checked}),
                        displayMode: props.displayMode
                    })
            })
        }
        </StyleGroup>
    )
}
ToggleGroup.defaultProps = {
    onSelect: (x) => console.log(x),
    displayMode: "edit"
}
export default ToggleGroup