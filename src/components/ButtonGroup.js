import React, {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Button from './Button';
const StyledButtonGroup = styled.div`
    margin: ${props => props.demo? "8px": "0"};
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    min-width: ${props => props.fullWidth ? "100%": "auto"};
    & div {
        display: flex;
        align-items: stretch;
    }
    & div button {
        flex: 1;
    }
`;

const ButtonGroup = (props) => {
    let returnFieldList = props.data.map(x => x[props.returnField])
    if((new Set(returnFieldList)).size !== props.data.length)
        throw new Error("Button group can't have duplicate return value")
    
    if (props.defaultValue !== "" && !returnFieldList.includes(props.defaultValue))
        throw new Error("defaultValue must be in returnField list")

    const [Value, setValue] = useState(props.defaultValue)
    let attr = {
        theme: props.theme,
        fullWidth: false,
        demo: false
    }
    const handleClick = (x) => {
        setValue(x)
        props.onSelect(x)
    }
    return (
        <StyledButtonGroup {...props}>
            <div>
            <Button onClick={() => handleClick(props.data[0][props.returnField])}type={props.data[0][props.returnField] === Value ? "contained" : "outline"} ingroup= "left" {...attr}>
                {props.data[0][props.displayField]}
            </Button>
            {props.data.slice(1, -1).map(x => 
                <Button key={x[props.returnField]} onClick={() => handleClick(x[props.returnField])} type={x[props.returnField] === Value ? "contained" : "outline"} ingroup= "middle" {...attr}>
                    {x[props.displayField]}
                </Button>)}
            <Button onClick={() => handleClick(props.data[props.data.length - 1][props.returnField])}type={props.data[props.data.length - 1][props.returnField] === Value ? "contained" : "outline"} ingroup= "right" {...attr}>
                {props.data[props.data.length - 1][props.displayField]}
            </Button>
            </div>
        </StyledButtonGroup>
    )
}

ButtonGroup.propTypes = {
    data: PropTypes.array,
    theme: PropTypes.oneOf(["light", "dark"]),
    displayField: PropTypes.string.isRequired,
    returnField: PropTypes.string.isRequired,
    onSelect: PropTypes.func,
    fullWidth: PropTypes.bool,
    defaultValue: PropTypes.string
}
ButtonGroup.defaultProps = {
    theme: "light",
    onSelect: (x) => console.log(x),
    fullWidth: false,
    defaultValue: ""
}
export default ButtonGroup
