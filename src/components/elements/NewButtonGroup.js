import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from './Button';

const StyledButtonGroup = styled.div`
    --fillColor: ${props => props.theme.fillColor};
    --count: ${props => props.count || 3};
    margin: ${props => props.demo ? "8px": "0px"};
    padding: 0px;
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    align-items: flex-start;
    min-width: ${props => props.fullWidth ? "100%" : "auto"};
    border: 2px solid ${props => props.displayMode === "disabled" ? "#A3A3A3" : "var(--fillColor)"};
    border-radius: 8px;
    overflow: hidden;

    & div {
        display: grid;
        grid-template-columns: repeat(var(--count), 1fr);
        grid-template-rows: 1;
    }
`;

const ButtonGroup = (props) => {
    //Catching errors
    props.children.forEach(child => {
        if (child.type !== Button)
            throw Error("Children of ButtonGroup must be Button")
        else if (child.props.value === undefined)
            throw Error("Children must contain props 'value' ")
    })

    if (props.children.filter(child => child.props.default).length > 1)
        throw Error("Cannot have more than one default value")

    const [Value, setValue] = useState(props.defaultValue)

    const handleClick = (x) => {
        setValue(x)
        props.onSelect(x)
    }
    useEffect(() => {
        let defElement = props.children.find(child => child.props.default)
        if (defElement) {
            setValue(defElement.props.value)
            props.onSelect(defElement.props.value)
        }
    }, [props])

    
    return (
        <StyledButtonGroup {...props}>
            <div>
            {React.Children.map(props.children, (child, idx) => {
                return React.cloneElement(
                    child, 
                    {
                        fullWidth: false, demo: false, displayMode: props.displayMode,
                        ingroup: idx === 0 ? "left" : idx === props.children.length - 1 ? "right" : "middle", 
                        type: Value === child.props.value ? "contained": "outline", 
                        onClick: () => handleClick(child.props.value)})
            })}
            </div>
        </StyledButtonGroup>
    )
}

ButtonGroup.defaultProps = {
    onSelect: (x) => console.log(x),
    defaultValue: "",
    displayMode: "edit"
}
export default ButtonGroup
