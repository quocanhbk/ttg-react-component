import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import IcoX from './icons/IcoX'
import IconCheck from './icons/IcoCheckCircle';
import IconError from './icons/IcoAlertTriangle';
import IconPlus from './icons/IcoEdit2';
import IconInfo from "./icons/IcoInfo";
import PropTypes from 'prop-types'

const Alert = (props) =>{

    const DivContainer = styled.div`
        box-sizing: border-box;
        position: fixed;
        bottom: 10px;
        left:50%;
        transform: translateX(-50%);
        display: ${props => props.visible ? "block" : "none"};
    `;
    const AlertStyle = styled.div`
        ${props => props.type === 'success' && 'background-color: #4caf50;'}
        ${props => props.type === 'warning' && 'background-color: #ff9800;'}
        ${props => props.type === 'info' && 'background-color: #2196f3;'}
        ${props => props.type === 'error' && 'background-color: #f44336;'}
        ${props => props.type === 'default' && 'background-color: #000;'}
        display: flex;
        max-width: 400px;
        padding: 5px;
        margin: 5px;
        border-radius: 4px;
        justify-content: space-between;
        align-items: center;
    `;
    const AlertIcon = styled.div`
        padding:5px;
        & svg{
            width: 26px;
            height: auto;
            color:#fff;
        }
    `;
    const AlertMsg = styled.div`
        font-size: 1rem;
        margin:  0 10px;
        color:#fff;
    `;
    const AlertClose = styled.div`
        & button{
        display: block;
        border: 0;
        color: #fff;
        cursor:pointer;
        opacity: 0.8;
        background:transparent;
        }
        & button:hover{
            background-color: rgba(0, 0, 0, 0.1);
        }
        & svg{
        width : 20px;
        height: auto;
        }
    `;

    const [open, setOpen] = useState(props.visible)
    useEffect(() => {
        if (!props.visible) {
            setTimeout(() => {
                setOpen(props.visible)
            }, 200);
        } else {
            setOpen(props.visible)
        }
        const snackbarTimeout = setTimeout(props.onClickOutside, props.timeout);

        return () => clearTimeout(snackbarTimeout);

    }, [props.visible])
    return (
            <DivContainer visible={open}  className={`notification-container`}>
                
                        <AlertStyle {...props}  type={props.type}
                            className={`notification alert`}
                        >
                            <AlertIcon className="notification-image">
                                {props.icon}
                            </AlertIcon>
                            <AlertMsg className="notification-message">
                                    {props.children}
                            </AlertMsg>
                            <AlertClose className="notification-close">
                            <button onClick={props.onClickOutside}>
                                <IcoX/>
                            </button>
                        </AlertClose>
                </AlertStyle>
            </DivContainer>
    );
}

Alert.propType={
    icon: PropTypes.element,
    type:PropTypes.string,
    timeout:PropTypes.number
}
Alert.defaultProps={
    onClickOutside: ()=> {},
    type: "default",
    message: "default",
    timeout: 3000,
}
export default Alert