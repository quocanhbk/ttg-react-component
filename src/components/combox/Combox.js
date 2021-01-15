import React, {useState, useEffect, useRef} from 'react'
import IcoChevronDown from '../icons/IcoChevronDown'
import PropTypes from 'prop-types'
import Option from './Option'
import styled, {keyframes} from 'styled-components'
import useClickOutside from '../../hooks/useClickOutside'
import {getLighter} from '../../utils/color'
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
    cursor: pointer;
    
`;
const Bar = styled.div`
    
    display: flex;
    justify-content: space-between;
    height: 100%;
    border: 2px solid ${props => props.open ? props.theme.color.fill.primary : props.theme.color.border.primary};
    border-radius: 5px;
    transition: border 0.15s linear;
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
const slideDown = keyframes`
    from {max-height: 0px; opacity: 0;}
    to {max-height: 15rem; opacity: 1;}
`;
const SelectContainer = styled.div`
    border: 2px solid ${props => props.theme.color.border.primary};
    background: ${props => props.theme.color.background.primary};
    //max-height: 15rem;
    position: absolute;
    overflow: hidden;
    width: 100%;
    z-index: 2;
    border-radius: 5px;
    margin-top: 0.4rem;
    animation: ${slideDown} 0.3s ease-out 0s 1 forwards normal;
`;
const Selection = styled.div`
    padding: 0.5rem;
    background-color: ${props => props.selected ? props.theme.color.background.secondary: "transparent"};
    &:hover {
        background-color: ${props => props.theme.color.border.primary};
    }
`;
const StyledItem = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    background: ${props => props.theme.color.fill.primary};
    color: ${props => props.theme.color.background.primary};
    animation: ${opa} 0.3s linear 0s 1 normal forwards;
    border-radius: 5px;
    padding: 2px 8px;
    margin-right: 6px;
    font-size: ${props=> props.theme.textSize.medium};
    cursor: pointer;
    transition: all 1s linear;
    &.item-out {
        animation: ${out} 0.3s ease-out 0s 1 normal forwards;
    }
`;
const SearchBarContainer = styled.div`
    background: transparent;
    padding: 0.5rem 0.5rem;
`;
const SearchBar = styled.input`
    background: transparent;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    outline: 0;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${props => props.theme.color.border.primary};
    color: ${props => props.theme.color.fill.primary};
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
    const [seachText, setSeachText] = useState("")

    const refSearchBar = useRef(null)

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

    const handleSearchText = (e) => {
        setSeachText(e.target.value)
    }

    const handleOpen = (state) => {
        setIsOpen(state)
        console.log(refSearchBar.current)
    }
    return (
        <Container ref={comboxRef}>
            <Bar open={isOpen}>
                <ItemContainer onClick={() => handleOpen(true)}>
                    {items.map(item => 
                    <Item key={item.id} removeItem={() => removeItem(item.id)}>{item.children}</Item>
                    )}
                </ItemContainer>
                <OpenButton onClick={() => handleOpen(!isOpen)}><IcoChevronDown/></OpenButton>
            </Bar>
            {isOpen && 
                <SelectContainer>
                    {props.searchable &&
                    <SearchBarContainer>
                        <SearchBar ref={refSearchBar} type="input" placeholder="Search..." value={seachText} onChange={handleSearchText}/>
                    </SearchBarContainer>
                    }
                    {props.children
                        .filter(child => child.props.searchText.concat([child.props.value]).map(c => c.toUpperCase()).join("|").includes(seachText.toUpperCase()))
                            .map(child => 
                                <Selection 
                                    selected={items.map(item => item.id).includes(child.props.id)} 
                                    key={child.props.id}
                                    onClick={() => addItem(child.props)}>{child.props.children}
                                </Selection>
                            )
                    }
                </SelectContainer>
            }
        </Container>
    )
}

Combox.Option = Option

Combox.propsTypes = {
    returnData: PropTypes.func,
    multiple: PropTypes.bool,
    searchable: PropTypes.bool,
    searchText: PropTypes.arrayOf(PropTypes.string)
}

Combox.defaultProps = {
    returnData: (v) => console.log(v),
    multiple: true,
    searchable: true,
}

export default Combox