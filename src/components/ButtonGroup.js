import React, {useState} from 'react'
import styled from 'styled-components'
import Button from './Button';

const StyledButtonGroup = styled.div`
    margin: ${props => props.demo? "8px": "0"};
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    min-width: ${props => props.fullWidth ? "100%": "auto"};
    margin-bottom: 10px;
    & div {
        display: flex;
        align-items: stretch;
    }
    & div button {
        flex: 1;
    }
`;

const ButtonGroup = (props) => {
    const [Value, setValue] = useState(props.defaultValue)
    let attr = {
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
            <Button onClick={() => handleClick(props.data[0][props.returnField])} type={props.data[0][props.returnField] === Value ? "contained" : "outline"} ingroup= "left" {...attr}>
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

ButtonGroup.defaultProps = {
    onSelect: (x) => console.log(x),
    fullWidth: false,
    defaultValue: "",
    theme: {
        mClr: {R: 23, G: 64, B: 145},
        tClr: {R: 255, G: 255, B: 255},
    }
}
export default ButtonGroup
