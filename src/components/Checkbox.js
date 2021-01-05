import styled from 'styled-components'
import {getFader} from '../utils/color'

const LabelCheckbox = styled.label`
    display: flex;
    position: relative;
    margin: 5px 0 10px 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;    
`;

const InputChkbox = styled.input`
    width:0;
    height:0;
    display:block;
    position: absolute;
    opacity:0;
    cursor:pointer;
    &:checked ~ span:nth-child(2){
        transition: 0.4s;
        background: transparent;
    }
    &:checked ~ span:after {
        display: block;
      }
`;

const SpanChkBox = styled.span`
    display:block;  
    position: relative;
    top: 0;
    left: 0;
    height:22px;
    width: 22px;
    background-color: #fff;
    border-radius:3px;
    border:2px solid #ddd;
    &:after{
        content: "";
        position: absolute;
        display: none;
        left: 6px;
        top: 2px;
        width: 4px;
        height: 8px;
        border: solid ${props => props.theme.fillColor};
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    &:hover{
        transition: 0.4s;
        box-shadow: -1px 0px 4px 3px   
        ${props => getFader(props.theme.fillColor, 0.8)};
`;
const SpanChkName= styled.span`
    display:block;
    font-size:1rem;
    margin: 0 10px;
    color:${props => props.theme.name === "light" ? "black" : "white"};
`;


const Checkbox = (props) => {
    return(
        <LabelCheckbox {...props}>
            <InputChkbox type="checkbox" name={props.name}  value={props.value}/>
            <SpanChkBox/>
            <SpanChkName>{props.children}</SpanChkName>
        </LabelCheckbox>
    )
}
export default Checkbox