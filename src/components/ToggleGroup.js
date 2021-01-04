import React, { } from 'react'
import ToggleSwitch from "./ToggleSwitch"
import styled from 'styled-components'

const ToggleGroup = (props) =>{
    const select = props.value;
    const display= props.displayDirection;
    const StyleChkGroup = styled.div`
    margin: 8px 0;
    display:block;
    min-width:auto;
    margin-bottom: 10px;
  
    position:relative;
    &>div{
     display:flex;
     flex-direction: ${display===false ? 'row' : 'column'};
    }
    &>div>div{
        justify-content:space-between;
    }
`;


    StyleChkGroup.defaultProps = {
        theme: {
            tClr: {R: 23, G: 64, B: 145},
            mClr: {R: 255, G: 255, B: 255},
        },
        
        name: "switch",
        displayMode: "edit"
    }
    return (
        <>
        <StyleChkGroup>
            <div displayDirection={props.displayDirection}>
        {
            select.map((item, index) => {
                return(
                    <ToggleSwitch value={item.name} key={index} name={props.name}/>

                )
            })
        }
            </div>
        </StyleChkGroup>
        </>
    )
}

export default ToggleGroup