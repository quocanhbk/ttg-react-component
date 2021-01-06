import React , {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import { PropTypes } from "prop-types";

const StyleSlider = styled.div`
    position:relative;
    margin-bottom:10px;
    display:flex;
    align-items:center;
`;

const InputStyle = styled.input`

    -webkit-appearance: none;
    width: 90%;
    height: 10px;
    border-radius: 5px;
    background: #d7dcdf;
    outline: none;
    padding: 0;
    margin: 0;
    &::-webkit-slider-thumb {
        appearance: none;
        background: ${props => props.theme.fillColor};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
        transition: background .15s ease-in-out;
    }
      
    &::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        transition: background .15s ease-in-out;
    }
`;

const SliderValue= styled.span`
    color  : ${props => props.theme.textColor};
    display: inline-block;
    position: relative;
    width: 60px;
    line-height: 20px;
    text-align: center;
    border-radius: 3px;
    padding: 5px 10px;
    margin-left: 12px;
    font-size: 1rem;
`;

const linearGradientColor = '#4aa1f3';
const rangeBackgroundColor = '#d7dcdf';
const Slider = (props) =>{
    const{
        step,
        min,
        max,
        value,
        defaultLength,
        onChangeValue,
    } = props;

    const rangeRef = useRef();
    const [range,setRange]=useState(defaultLength);
    const rangeLinearGradient = (value, min, max) => {
        const percentage = calculatePercentage(value, min, max);
        const newBackgroundStyle = `linear-gradient(90deg, ${linearGradientColor} 0% ${percentage}, ${rangeBackgroundColor} ${percentage} 100%)`;
        rangeRef.current.style.background = newBackgroundStyle;
    }
    const handleChange = max => e => {
        onChangeValue(e);
        setRange(e.target.value);

        rangeLinearGradient(e.target.value, min, max);
    }

    const calculatePercentage = (value, min, max) => {
        return ((value - min) / (max - min)) * 100 + '%';
    }
    useEffect(() =>{
        const rangeValue = parseInt(rangeRef.current.value,10);
        rangeLinearGradient(rangeValue,min,max);
    },[rangeRef,min,max]);

    return(
        <>
            <StyleSlider className="slider-container">
                <InputStyle
                ref={rangeRef}
                className="range-slider"
                type="range"
                step={step}
                min={min}
                max={max}
                value={value}
                onChange={handleChange(max)}
                />
                <SliderValue className="range-slider-value">{range}</SliderValue>           
            </StyleSlider>
        </>
    )
}

Slider.prototype ={
    step: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    defaultLength: PropTypes.number.isRequired,
    sliderThumbColor: PropTypes.string.isRequired,
    linearGradientColor: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChangeValue: PropTypes.func.isRequired,
}
export default Slider