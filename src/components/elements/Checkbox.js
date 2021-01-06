import styled from 'styled-components'
import {getFader} from '../../utils/color'
import {useState, useEffect} from 'react'
const LabelCheckbox = styled.label`
    display: inline-block;
    position: relative;
    padding: 4px 8px 4px 1.5rem;
    cursor: pointer;
    user-select: none;
    pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};

`;

const InputChkbox = styled.input`
    display: none;
    
    &:checked ~ span:after {
        border-color: ${props => props.displayMode === "disabled" ? "#A0A0A0" : props.theme.fillColor};
    }
    &:checked ~ span {
        border-color: ${props => props.displayMode === "disabled" ? "#A3A3A3" : props.theme.fillColor};
    }
`;

const SpanChkBox = styled.span`
    display:block;  
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0rem;
    height:1.2rem;
    width: 1.2rem;
    background-color: transparent;
    border-radius: 4px;
    border:2px solid ${props => props.displayMode === "disabled" ? "#A3A3A3" : getFader(props.theme.fillColor, 0.4)};

    &:after{
        transition: border-color 0.15s linear;
        content: "";
        position: absolute;
        left: 4.5px;
        top: 1px;
        width: 4px;
        height: 8px;
        border-style: solid;
        border-color: transparent;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
    &:hover{
        box-shadow: 0px 0px 16px ${props => getFader(props.theme.fillColor, 0.8)};
    }
`;

const SpanChkName= styled.span`
    display:block;
    font-size:1rem;
    color: ${props => props.displayMode === "disabled" ? "#A3A3A3": props.theme.textColor};

`;


const Checkbox = (props) => {
    const [mount, setMount] = useState(false)
    const [checked, setChecked] = useState(props.default)

    useEffect(() => {
        if (!mount) {
            props.onSelect(checked)
            setMount(true)
        }
    },[])

    const handleSelect = (e) => {
        setChecked(e.target.checked)
        props.onSelect(e.target.checked)
    }

    return(
        <LabelCheckbox {...props} displayMode={props.disabled ? "disabled" : props.displayMode}>
            <InputChkbox displayMode={props.disabled ? "disabled" : props.displayMode} type="checkbox" name={props.name} value={props.value} onChange={handleSelect} defaultChecked={props.default}/>
            <SpanChkBox displayMode={props.disabled ? "disabled" : props.displayMode}/>
            <SpanChkName displayMode={props.disabled ? "disabled" : props.displayMode}>{props.children}</SpanChkName>
        </LabelCheckbox>
    )
}

Checkbox.defaultProps = {
    onSelect: (x) => console.log(x),
    default: false,
    displayMode: "edit"
}
export default Checkbox