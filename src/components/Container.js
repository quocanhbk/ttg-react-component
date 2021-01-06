import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    background: ${props => props.theme.name === "dark" ? "#212223" : "white"};
    color: ${props => props.theme.textColor};
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    padding: 8px;
    border: 1px solid #333;
    border-radius: 8px;
    margin: 8px;

    & h3 {
        font-weight: 500;
        padding-bottom: 0.5rem;
    }
`;

const Container = (props) => {
    return (
        <StyledContainer {...props}>
            {props.title && <h3>{props.title}</h3>}
            {props.headline && <h3>{props.headline}</h3>}
            {props.children}
        </StyledContainer>
    )
}

export default Container
