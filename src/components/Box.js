import React from 'react'
import styled, {css} from 'styled-components'

const StyledBox = styled.div`
    border: 1px solid #A3A3A3;
    border-radius: 8px;

    margin-bottom: 8px;
    & h4 {
        border-bottom: 1px solid #A3A3A3;
        padding: 4px 12px;
        background-color: rgba(0,0,0,0.2);
    }
    & .grid {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto;
        background-color: transparent;
        padding: 8px;
        gap: 10px;
        ${props => props.block && css `
            display: block;
        `}
    }
    
`;

const Box = (props) => {
    return (
        <StyledBox {...props}>
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
