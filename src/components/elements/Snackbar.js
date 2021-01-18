import React, { useEffect, useState } from 'react';
import styled,{keyframes} from 'styled-components';
import PropTypes from 'prop-types';

const snackbarIn = keyframes`
    from { opacity: 0;}
    to { opacity: 1; }
`;
const snackbarOut = keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
`;

 const StyledSnackbarWrapper = styled.div`
    position: fixed;
    transition: all 500ms linear;
    animation: ${props => props.slideIn ? snackbarIn : snackbarOut} 0.3s linear 0s 1 forwards normal;
    left:50%;
    transform: translateX(-50%);
    bottom: 1rem;
    display: ${props => props.visible ? "block" : "none"};
    z-index: 999;
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
    min-width: 288px;
`;

const Snackbar = (props) => {
    const [open, setOpen] = useState(false)
    const [slideIn, setSlideIn] = useState(true)
    useEffect(() => {
        if (!props.visible) {
            setSlideIn(false)
            setTimeout(() => {
                setOpen(props.visible)
            }, 300);
        } else {
            setOpen(props.visible)
            setSlideIn(true)
        }

    }, [props.visible])

    useEffect(() => {
        const autoHide = setTimeout(() => {
            props.onClose()
        }, props.timeOut)
        return (() => clearTimeout(autoHide))
    })

    return (
        <StyledSnackbarWrapper {...props} visible={open} slideIn={slideIn}>
            {props.children }
        </StyledSnackbarWrapper>
    )
};
Snackbar.propTypes = {
    timeOut: PropTypes.number,
    visible : PropTypes.bool,
    onClose: PropTypes.func
}
Snackbar.defaultProps={
    timeOut: 5000
}

export default Snackbar;