import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    background: ${props => props.theme.name === "dark" ? "#212223" : "white"};
    color: ${props => props.theme.name === "dark" ? "White" : "#171717"};
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    padding: 8px;
    border: 1px solid #333;
    border-radius: 8px;
    margin: 8px;

    & h2 {
        font-weight: 500;
    }
`;

const Container = (props) => {
    return (
        <StyledContainer {...props}>
            <h2>{props.title}</h2>
            <div>{props.headline}</div>
            {props.children}
        </StyledContainer>
    )
}

export default Container
