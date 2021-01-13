import React, {useState, useEffect, useRef} from 'react'
import IcoChevronDown from '../icons/IcoChevronDown'
import PropTypes from 'prop-types'
import Option from './Option'
import styled, {keyframes} from 'styled-components'
import useClickOutside from '../../hooks/useClickOutside'

const opa = keyframes `
    0% {transform: translateX(4vw);opacity: 0;}
    100% {transform: translateX(0);opacity: 1;}
`;
const out = keyframes`
    100% {transform: translateX(4vw); opacity: 0;}
`;


const Container = styled.div`
    display: block;
    width: 100%;
    height: 2.5rem;
    position: relative;
`;
const Bar = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    border: 2px solid ${props => props.theme.color.border.primary};
`;
const ItemContainer = styled.div`
    width: 100%;
    background: transparent;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    overflow-y: auto;
    padding: 4px 6px;
    overflow-x: hidden;
    
`;
const OpenButton = styled.div`
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 0 4px;
    border: none;
    border-radius: 0;
    outline: 0;
`;
const SelectContainer = styled.div`
    border: 2px solid ${props => props.theme.color.border.primary};
    background: ${props => props.theme.color.background.primary};
    max-height: 15rem;
    position: absolute;
    width: 100%;
    z-index: 5;
`;
const Selection = styled.div`
    padding: 0.5rem;
    background-color: ${props => props.selected ? props.theme.color.background.secondary: "transparent"};
`;
const StyledItem = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    background: ${props => props.theme.color.fill.primary};
    color: ${props => props.theme.color.background.primary};
    animation: ${opa} 0.3s linear 0s 1 normal forwards;
    border-radius: 5px;
    padding: 0 6px;
    margin-right: 6px;
    cursor: pointer;
    transition-duration: 1s;
    &.item-out {
        animation: ${out} 0.3s ease-out 0s 1 normal forwards;
    }
`;
function Item(props) {
    const [out, setOut] = useState(false)
    const onClick = () => {
        setOut(true);
        setTimeout(() => {
            props.removeItem()
        },300)
    }
    return (
        <StyledItem className={out ? "item-out" : ""} onClick={onClick} style={{backgroundColor: props.bg}}>{props.children}</StyledItem>
    )
}
function Combox(props) {
    const [isOpen, setIsOpen] = useState(false);
    const comboxRef = useClickOutside(() => setIsOpen(false))
    // Selected item
    const [items, setItems] = useState([])

    const addItem = (itemProp) => {
        if (props.multiple) {
            if (items.map(item => item.id).includes(itemProp.id)) {
                console.log("Existed")
                setItems(items.filter(i => i.id !== itemProp.id))
            }
            else 
                setItems([...items, itemProp])
        }
        else {
            setItems([itemProp])
            setIsOpen(false)
        }
    }

    useEffect(() => {
        props.returnData(items)
    })

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    return (
        <Container ref={comboxRef}>
            <Bar>
                <ItemContainer onClick={() => setIsOpen(true)}>
                    {items.map(item => 
                    <Item key={item.id} removeItem={() => removeItem(item.id)}>{item.children}</Item>
                    )}
                </ItemContainer>
                <OpenButton onClick={() => setIsOpen(!isOpen)}><IcoChevronDown/></OpenButton>
            </Bar>
            {isOpen && 
                <SelectContainer>
                    {props.children.map(child => 
                    <Selection selected={items.includes(child)} key={child.props.id}
                    onClick={() => addItem(child.props)}>{child.props.children}</Selection>
                    )}
                </SelectContainer>
            }
        </Container>
    )
}

Combox.Option = Option

Combox.propsTypes = {
    returnData: PropTypes.func,
    multiple: PropTypes.bool
}

Combox.defaultProps = {
    returnData: (v) => console.log(v),
    multiple: true
}

export default Combox