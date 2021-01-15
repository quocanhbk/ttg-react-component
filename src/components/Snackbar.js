import React, { useEffect } from 'react';
import styled,{keyframes} from 'styled-components';
import PropTypes from 'prop-types';
import IcoX from './icons/IcoX';
const modalEnter = keyframes`
    from { bottom: -100%; }
    to { bottom: 10px; }
`;

 const StyledSnackbarWrapper = styled.div`
    &>div{
        transition: all 500ms linear;
        animation: ${modalEnter} 0.5s ease-out 0s 1 forwards normal;
        position: fixed;
        bottom: 10px;
        left:50%;
        transform: translateX(-50%);
    }
`;

const Snackbar = (props) => {
    
    useEffect(() => {
        const snackbarTimeout = setTimeout(props.onClickOutside, props.timeout);

        return () => clearTimeout(snackbarTimeout);

    }, )

    return (
    <StyledSnackbarWrapper {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(
                    child, 
                    {
                        displayMode: props.displayMode,
                        ingroup: true
                    })
            })
        }
    </StyledSnackbarWrapper>
    )
};
Snackbar.propTypes = {
    timeout: PropTypes.number,
    onClickOutside: PropTypes.func
}
Snackbar.defaultProps={
    onClickOutside: ()=> {},
    timeout: 3000
}

export default Snackbar;