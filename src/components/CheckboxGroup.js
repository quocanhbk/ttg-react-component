import React, { } from 'react'
import Checkbox from "./Checkbox"
import styled from 'styled-components'

const CheckboxGroup = (props) =>{
    const select = props.value;
    const display= props.displayDirection;
    const StyleChkGroup = styled.div`
    margin: 8px 0;
    display:block;
    min-width:auto;
    margin-bottom: 10px;
  
    position:relative;
    & div {
         display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display: flex;flex-wrap: wrap;-webkit-flex-wrap: wrap; 
         flex-direction: ${display===false ? 'row' : 'column'};
    }
    & div label{
        flex: 1;-ms-flex: 1;-webkit-flex: 1; 
    }
`;


    StyleChkGroup.defaultProps = {
        theme: {
            tClr: {R: 23, G: 64, B: 145},
            mClr: {R: 255, G: 255, B: 255},
        },
        
        name: "group check1",
        displayMode: "edit"
    }
    return (
        <>
        <StyleChkGroup>
            <div displayDirection={props.displayDirection}>
        {
            select.map((item, index) => {
                return(
                    <Checkbox value={item.name} key={index} name={item.name}/>

                )
            })
        }
            </div>
        </StyleChkGroup>
        </>
    )
}

export default CheckboxGroup