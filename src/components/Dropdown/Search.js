import { useEffect, useState } from 'react';
import styled from 'styled-components'
import OneSelect from './OneSelect'
import $ from 'jquery';
const DivParent = styled.div`
    background: #ede4e4;
    width: 50%;
    margin: auto;
    display: flex;
    height: 45px;
    position: relative;
`;

const FormParent = styled.form`
    z-index: 999;
`;

const Input = styled.input`
    padding-left: 10px;
    width: auto;
    background: none;
    border: none;
    outline: none;
    margin-top: 13px;
    margin-left: 10px;
    border-bottom: 2px solid;
`;

const ButtonDelete = styled.button`
    position: relative;
    margin: auto 0;
    background: transparent;
    transition: all .3s ease;
    background: gray;
    cursor: pointer;
    margin-left: 50px;
    padding: 0px 5px;
    outline: none;
    display: ${props => props.displayDelete ? undefined : 'none'};
    &:hover{
        background: red;
        color: white;
    }
`;

const AllOption = styled.div`
    position: absolute;
    color: black;
    width: 100%;
    background: ${props => props.colorBackground ? '#80808073' : 'none'};
    margin: auto;
    top: 100%;
    padding: 10px;
    border-radius: 5px;
    display: ${props => (props.display === false) ? 'none' : undefined};
    li{
        list-style: none;
        padding: 10px;

        &:hover{
            color: blue;
            background: gray;
            cursor: pointer;
            border-radius: 10px;
        }
    }
`;

const Search = (props) =>{
    var [Option, setOption] = useState(props.value);
    const [ArrayOption, setArray] = useState([]);
    const [displayOption, setDisplayOption] = useState(false);
    var ArrayDefault = props.value;

    const handleClick = () =>{
        setDisplayOption(!displayOption)
    }
     
    const handleDelete = (props) =>{
        // kiếm phần tử bị xóa
        var temp = [];
        for(var i = 0; i<ArrayOption.length; i++){
            if(props === i){
                Option.push(ArrayOption[i])
            }
            else{
                temp.push(ArrayOption[i])
            }
        }
        setArray(temp)
    }
    
    // xóa tất cả option người dùng đã chọn
    const handleDeleteAll = () =>{
        // sắp xếp lại vị trí của các option
        setOption(ArrayDefault)
        setArray([]);
    }
    
    // set lại option nếu người dùng xóa
    const OptionTemp = [];
    // lấy option người dùng chọn
    var OptionChoose = '';

    const handleAdd = (index) =>{
        for(var i = 0; i < Option.length; i++){
            if(index === i){
                OptionChoose = Option[i]
            }
            else{
                OptionTemp.push(Option[i])
            }
        }
        setOption(OptionTemp)
        ArrayOption.push(OptionChoose)
    }
    // hiển thị button deleteAll nếu người dùng đã chọn > 1 option
    var isDelete = false;
    var colorBackground = true;
    if(ArrayOption.length > 0){
        isDelete = !isDelete
    }
    if(Option.length === 0){
        colorBackground=!colorBackground
    }
    
    return(
        <DivParent id="menuwrap">
            <FormParent>
                {
                    ArrayOption.map((item, index)=>{
                        return(
                            <OneSelect value={item} key={index} handleClick={()=>handleDelete(index)} id="menutoggle"/>
                        )
                    })
                }
                <Input type="search" placeholder="Search..." onMouseDown={handleClick}/>
            </FormParent>
            <ButtonDelete onClick={handleDeleteAll} displayDelete={isDelete}>X</ButtonDelete>
            <AllOption display = {displayOption} colorBackground={colorBackground} id="menucontainer">
                {
                    Option.map((item, index)=>{
                        return(
                            <li key={index} onClick={()=>handleAdd(index)}>{item}</li>
                        )
                    })
                }
            </AllOption>
        </DivParent>
    )
}

export default Search