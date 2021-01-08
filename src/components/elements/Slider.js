import React , {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
import {getFader} from '../../utils/color'
const StyleSlider = styled.div`
    position:relative;
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    width: ${props => props.fullWidth ? "100%": props.width + "px"};
    padding: 4px 8px;
    
`;
const Container = styled.div`
    position: absolute;
    background: ${props => props.theme.color.border.primary};
    height: 2.5px;
    left: 0;
    top: 50%;
    width: 100%;
    transform: translate(0%, -50%);
`;
const Left = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 50px;
    background: ${props => props.displayMode === "disabled" ? props.theme.color.text.disabled : props.theme.color.fill.primary};;
`;
const InputStyle = styled.input`
    position: absolute;
    background: red;
    display: inline-block;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    height: 3px;
    outline: none;
    background: transparent; //${props => props.displayMode === "disabled" ? "#A3A3A3" : props.theme.color.fill.primary};
    &::-webkit-slider-thumb {
        pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};
        appearance: none;
        background: ${props => props.theme.color.background.primary};
        width: 20px;
        height: 20px;
        border: 3px solid ${props => props.displayMode === "disabled" ? "#A3A3A3" : props.theme.color.fill.primary};
        border-radius: 50%;
        cursor: pointer;
        transition: all .15s ease-in-out;
    }
    &::-webkit-slider-thumb:active {
        transform: scale(1.3, 1.3)
    }
    &::-webkit-slider-thumb:hover {
        box-shadow: 0px 0px 16px ${props => props.displayMode === "edit" ? getFader(props.theme.color.fill.primary, 0.8) : "transparent"};
    }
    &:hover ~ span {
        opacity: 1;
    }
    &::-moz-range-thumb {
        appearance: none;
        background: ${props => props.theme.color.background.primary};
        width: 20px;
        height: 20px;
        border: 2px solid ${props => props.theme.color.fill.primary};
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
    color  : ${props => props.theme.color.text.primary};
    opacity: 0;
    position: absolute;
    transition: opacity 0.15s ease-in;
    top: 16px;
    background: ${props => props.theme.backgroundColor};
    box-shadow: 0px 0px 2px ${props => getFader(props.theme.color.text.primary, 0.8)};
    text-align: center;
    border-radius: 5px;
    padding: 1px 4px;
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
            <Container>
                <Left {...props} style={{width: parseInt((range - min)/(max-min)*100).toString() + "%"}}/>
                <InputStyle {...props}
                ref={x}
                type="range"
                step={step}
                min={min}
                max={max}
                value={range}
                onChange={handleChange}
                />
                <SliderValue 
                    ref={y} 
                    style={{
                        left: parseInt((range - min)/(max-min)*100).toString() + "%",
                        transform: "translateX(-" + parseInt((range - min)/(max-min)*100).toString() + "%)" 
                    }}>{range}</SliderValue>  
            </Container>   
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
    max: 100,
    defaultLength: 0,
    width: 100,
    onSlide: (x) => console.log(x),
    displayMode: "edit"
}
export default Slider