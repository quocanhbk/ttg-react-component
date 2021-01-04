import styled from 'styled-components'

const LabelCheckbox = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin: 5px 0 10px 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-left:10px;
    
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
        background: rgb(${props => props.type === "group check1" ? props=>props.theme.tClr.R : props=>props.theme.mClr.R},
        ${props => props.type === "group check1" ? props=>props.theme.tClr.G : props=>props.theme.mClr.G},
        ${props => props.type === "group check1" ? props=>props.theme.tClr.B : props=>props.theme.mClr.B});
    }
    &:checked ~ span:after {
        display: block;
      }
`;

const SpanChkBox = styled.span`
    display:block;  
    position: absolute;
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
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    &:hover{
        transition: 0.4s;
        -moz-box-shadow: -1px 0px 4px 3px   
        rgba(${props => props.type === "group check1" ? props=>props.theme.tClr.R : props=>props.theme.mClr.R},
            ${props => props.type === "group check1" ? props=>props.theme.tClr.G : props=>props.theme.mClr.G},
            ${props => props.type === "group check1" ? props=>props.theme.tClr.B : props=>props.theme.mClr.B},
            ${props => props.type === "group check1" ? 0.15: 0.15});
        -webkit-box-shadow: -1px 0px 4px 3px   
        rgba(${props => props.type === "group check1" ? props=>props.theme.tClr.R : props=>props.theme.mClr.R},
            ${props => props.type === "group check1" ? props=>props.theme.tClr.G : props=>props.theme.mClr.G},
            ${props => props.type === "group check1" ? props=>props.theme.tClr.B : props=>props.theme.mClr.B},
            ${props => props.type === "group check1" ? 0.15: 0.15});
        box-shadow: -1px 0px 4px 3px   
            rgba(${props => props.type === "group check1" ? props=>props.theme.tClr.R : props=>props.theme.mClr.R},
                ${props => props.type === "group check1" ? props=>props.theme.tClr.G : props=>props.theme.mClr.G},
                ${props => props.type === "group check1" ? props=>props.theme.tClr.B : props=>props.theme.mClr.B},
                ${props => props.type === "group check1" ? 0.15: 0.15});
            }
`;
const SpanChkName= styled.span`
    display:block;
    font-size:1rem;
    font-weight:700;
    color:  rgb(${props => props.type === "group check1" ? props=>props.theme.tClr.R : props=>props.theme.mClr.R},
                ${props => props.type === "group check1" ? props=>props.theme.tClr.G : props=>props.theme.mClr.G},
                ${props => props.type === "group check1" ? props=>props.theme.tClr.B : props=>props.theme.mClr.B});

`;
LabelCheckbox.defaultProps = {
    theme: {
        tClr: {R: 23, G: 64, B: 145},
        mClr: {R: 255, G: 255, B: 255},
    },
    
    name: "group check1",
    displayMode: "edit"
}
const handleChangeValue = (value) =>{
    console.log(value);
}

const Checkbox = (props) => {
    return(
        <LabelCheckbox>
            <InputChkbox {...props} type="checkbox"  onClick={()=>handleChangeValue(props)}/>
            <SpanChkBox/>
            <SpanChkName>{props.value}</SpanChkName>
        </LabelCheckbox>
    )
}
export default Checkbox