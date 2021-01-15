import React, { useEffect } from 'react';
import styled,{keyframes} from 'styled-components';
import PropTypes from 'prop-types';
import IcoX from './icons/IcoX';
const modalEnter = keyframes`
    from { bottom: -100%; }
    to { bottom: 10px; }
`;

 const StyledSnackbarWrapper = styled.div`
    & .notification-container{   
        transition: all 500ms linear;
        animation: ${modalEnter} 0.5s ease-out 0s 1 forwards normal;
    }
`;

const Snackbar = (props) => {
    

    return (
    <StyledSnackbarWrapper {...props}>
        {props.children}
    </StyledSnackbarWrapper>
    )
};
Snackbar.propTypes = {
}
Snackbar.defaultProps={

}

export default Snackbar;