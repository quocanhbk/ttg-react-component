import React , {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
import {getFader} from '../../utils/color'
const StyleSlider = styled.div`
    position:relative;
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    width: ${props => props.fullWidth ? "100%": "auto"};
    padding: 4px 8px;
    
`;

const InputStyle = styled.input`

    display: inline-block;
    -webkit-appearance: none;
    width: ${props => props.fullWidth ? "100%" : props.width};
    height: 3px;
    outline: none;
    background: ${props => props.displayMode === "disabled" ? "#A3A3A3" : props.theme.fillColor};
    &::-webkit-slider-thumb {
        pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};
        appearance: none;
        background: ${props => props.theme.backgroundColor};
        width: 20px;
        height: 20px;
        border: 3px solid ${props => props.displayMode === "disabled" ? "#A3A3A3" : props.theme.fillColor};
        border-radius: 50%;
        cursor: pointer;
        transition: all .15s ease-in-out;
    }
    &::-webkit-slider-thumb:active {
        transform: scale(1.3, 1.3)
    }
    &::-webkit-slider-thumb:hover {
        box-shadow: 0px 0px 16px ${props => props.displayMode === "edit" ? getFader(props.theme.fillColor, 0.8) : "transparent"};
    }
    &:hover ~ span {
        opacity: 1;
    }
    &::-moz-range-thumb {
        appearance: none;
        background: ${props => props.theme.backgroundColor};
        width: 20px;
        height: 20px;
        border: 2px solid ${props => props.theme.fillColor};
        border-radius: 50%;
        cursor: pointer;
        transition: background .15s ease-in-out;
    }
`;
InputStyle.defaultProps = {
    width: "100%"
}

//Value
const SliderValue= styled.span`
    color  : ${props => props.theme.textColor};
    opacity: 0;
    position: absolute;
    transition: opacity 0.15s ease-in;
    top: 35px;
    background: ${props => props.theme.backgroundColor};
    box-shadow: 0px 0px 4px ${props => getFader(props.theme.fillColor, 0.8)};
    text-align: center;
    border-radius: 5px;
    padding: 1px 2px;
    font-size: 0.8rem;

`;


const Slider = (props) =>{
    const {step, min, max, width, defaultLength} = props
    const [range,setRange]=useState(defaultLength);
    const [widthState, setWidth] = useState(0)
    const x = useRef()
    const y = useRef()
    const handleChange = v => {
        if (props.displayMode === "edit") {
            props.onSlide(parseInt(v.target.value))
            setRange(v.target.value);
        }
    }
    
    useEffect(() => {
        setWidth(x.current.offsetWidth)
    },[])
    
    return(
        <StyleSlider {...props}>
            <InputStyle {...props}
            ref={x}
            type="range"
            step={step}
            min={min}
            max={max}
            width={width+"px"}
            value={range}
            onChange={handleChange}
            />
            <SliderValue ref={y} style={{left:((range - min)/(max-min)) * (widthState-24) + 10}}>{range}</SliderValue>           
        </StyleSlider>
    )
}

Slider.propTypes ={
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    defaultLength: PropTypes.number,
    maxWidth: PropTypes.bool,
    onSlide: PropTypes.func,
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"])
}
Slider.defaultProps = {
    step: 1,
    min: 0,
    max: 50,
    defaultLength: 0,
    width: 250,
    onSlide: (x) => console.log(x),
    displayMode: "edit"
}
export default Slider