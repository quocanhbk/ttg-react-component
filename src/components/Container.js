import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    background: ${props => props.theme.color.background.primary};
    color: ${props => props.theme.color.text.primary};
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
            {props.headline && <h4>{props.headline}</h4>}
            {props.children}
        </StyledContainer>
    )
}

export default Container
