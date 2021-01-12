import React, { useState } from 'react'
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"

const StyleDiv = styled.div`
    display:block;
    & .fadeIn{
        visibility: visible;
        opacity: 1;
        transition: visibility 0s linear 0s, opacity 300ms; 
    }
    & .fadeOut{
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s linear 300ms, opacity 300ms
    }
`;
const StyledSnackbar = styled.div`
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 1rem;

`;

const Snackbar = (props) =>{
const {isActive,message} = props


    return(
        <StyleDiv>
        <StyledSnackbar className={isActive ? 'fadeIn' : 'fadeOut'}>
                {message}
        </StyledSnackbar>
        </StyleDiv>
    )
}
export default Snackbar