import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IcoX from './icons/IcoX';

 const StyledSnackbarWrapper = styled.div`
    position: fixed;
    opacity:1;
    ${props => props.horizontal === 'center' && 'left: 50%;'}
    ${props => props.horizontal === 'center' && 'transform: translateX(-50%);'}
    ${props => props.horizontal === 'left' && 'left: 20px;'}
    ${props => props.horizontal === 'right' && 'right: 20px;'}
    ${props => props.vertical === 'top' && 'top: 10px;'}
    ${props => props.vertical === 'bottom' && 'bottom: 10px;'}
    transition: all .5s ease-in-out;
    @media (max-width: 420px) {
        width: 100%;
        left: 0;
        right: 0;
        transform: translateX(0);
    }
    & svg{
        width:1rem;
        height:1rem;
    }
`;

 const StyledSnackbar = styled.div`
    padding: 10px 10px 10px 15px;
    ${props => props.type === 'success' && 'background-color: #4caf50;'}
    ${props => props.type === 'warning' && 'background-color: #ff9800;'}
    ${props => props.type === 'info' && 'background-color: #2196f3;'}
    ${props => props.type === 'error' && 'background-color: #f44336;'}
    ${props => props.type === 'default' && 'background-color: #000;'}
    border-radius: 4px;
    color: #fff;
    font-size:14px;
    font-weight:500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
    @media (max-width: 600px) {
        margin: 0 10px;
    }
`;

 const StyledMessage = styled.div`
    padding: 0 20px;
    max-width: 400px;
    
    @media (max-width: 600px) {
        max-width: unset;
    }
`;
const CloseSnackbar = styled.button`
    display:block;
    background:transparent;
    border:0;
    cursor:pointer;
    color: #fff;
    border-radius:50%;
    padding:0 3px;
    &:hover{
        background-color: rgba(0, 0, 0, 0.04);
    }
`;
const getHorizontalPosition = position => {
    if (position === 'topLeft' || position === 'bottomLeft') return 'left';
    if (position === 'topRight' || position === 'bottomRight') return 'right';
    return 'center';
};

const getVerticalPosition = position => {
    if (position === 'bottomLeft' || position === 'bottomCenter' || position === 'bottomRight') return 'bottom';
    return 'top';
};

const Snackbar = ({icon, position = 'topCenter', message, type = 'info', timeout = 1000, onClose }) => {
    useEffect(() => {
        const snackbarTimeout = setTimeout(onClose, timeout);

        return () => clearTimeout(snackbarTimeout);
    }, []);

    return (
    <StyledSnackbarWrapper horizontal={getHorizontalPosition(position)} vertical={getVerticalPosition(position)}>
        <StyledSnackbar type={type}>
            {icon}
            <StyledMessage>{message}</StyledMessage>
            <CloseSnackbar onClick={onClose} >
                <IcoX/>
            </CloseSnackbar>
        </StyledSnackbar>
    </StyledSnackbarWrapper>
    )
};
Snackbar.propTypes = {
    icon: PropTypes.element,
    onClose: PropTypes.func,
    horizontal: PropTypes.string,
    vertical: PropTypes.string,
    type: PropTypes.string,
    message : PropTypes.string
}
Snackbar.defaultProps={
    onClose: ()=> {},
    horizontal: "bottom",
    vertical: "center",
    type: "default",
    message: "default"
}

export default Snackbar;