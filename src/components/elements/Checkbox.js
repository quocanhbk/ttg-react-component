import styled from 'styled-components'
import {getFader} from '../../utils/color'
import {useState, useEffect} from 'react'
const LabelCheckbox = styled.label`
    display: inline-block;
    position: relative;
    padding: 4px 8px 4px 1.5rem;
    cursor: pointer;
    user-select: none;    
`;

const InputChkbox = styled.input`
    display: none;

    &:checked ~ span:after {
        border-color: ${props => props.theme.fillColor};
    }
    &:checked ~ span {
        border-color: ${props => props.theme.fillColor};
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
    border:2px solid ${props => getFader(props.theme.fillColor, 0.3)};;

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
    color: ${props => props.theme.textColor};
`;


const Checkbox = (props) => {
    const [checked, setChecked] = useState(props.default)
    useEffect(() => {

    } )
    return(
        <LabelCheckbox {...props}>
            <InputChkbox type="checkbox" name={props.name} value={props.value} onChange={(e) => setChecked(e.target.checked)} defaultChecked={props.default}/>
            <SpanChkBox/>
            <SpanChkName>{props.children}</SpanChkName>
        </LabelCheckbox>
    )
}
export default Checkbox