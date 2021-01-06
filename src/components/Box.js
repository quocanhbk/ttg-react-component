import React from 'react'
import styled from 'styled-components'

const StyledBox = styled.div`
    border: 1px solid #A3A3A3;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 8px;
    & h4 {
        border-bottom: 1px solid #A3A3A3;
        padding: 4px 12px;
        background-color: rgba(0,0,0,0.2);
    }
    & .grid {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1;
        background-color: transparent;
        padding: 8px;
        gap: 10px;
    }
`;

const Box = (props) => {
    return (
        <StyledBox>
            <h4>{props.title}</h4>
            <div className="grid">
            {props.children}
            </div>
        </StyledBox>
    )
}
Box.defaultProps = {
    title: "Box"
}
export default Box
