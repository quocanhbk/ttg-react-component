import { type } from 'jquery';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import OneSelect from './OneSelect'
const DivParent = styled.div`
    background: #ede4e4;
    width: 50%;
    margin: auto;
    display: flex;
    height: 45px;
    position: absolute;
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
    margin: auto 0;
    background: transparent;
    transition: all .3s ease;
    background: gray;
    cursor: pointer;
    margin-left: 50px;
    padding: 0px 5px;
    outline: none;
    display: ${props => props.displayDelete ? undefined : 'none'};
    left: 45%;
    position: fixed;
    top: 3%;
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
        setOption(ArrayDefault)
        setArray([]);
    }
    
    // set lại option nếu người dùng xóa 1 option
    const OptionTemp = [];
    // lấy option người dùng chọn
    const handleAdd = (index) =>{
        for(var i = 0; i < Option.length; i++){
            if(index === i){
                ArrayOption.push(Option[index])
            }
            else{
                OptionTemp.push(Option[i])
            }
        }
        setOption(OptionTemp)
    } //end hàm xóa 1 option

    // hiển thị button deleteAll nếu người dùng đã chọn > 1 option
    var isDelete = false;
    var colorBackground = true;
    if(ArrayOption.length > 0){
        isDelete = !isDelete
    }
    if(Option.length === 0){
        colorBackground=!colorBackground
    } //end hiển thị button deleteAll
    
    // lay value ng dung input
    const [valueInput, setValueInput] = useState({})
    var uppercase = '';
    const handleGetValue = (e) =>{
        setValueInput({
            ...valueInput,
            [e.target.name]: e.target.value
        })
    }

    // phần đang fix
    const handleFilter = ()=> {
        // chuyển valueInput thành dạng string
        uppercase = JSON.stringify(valueInput).toUpperCase()
        for (var i = 0; i < ArrayDefault.length; i++) {
            // console.log(ArrayDefault[i].toUpperCase(), uppercase)
            // console.log(ArrayDefault[i].toUpperCase().indexOf(uppercase))
            if (ArrayDefault[i].toUpperCase().indexOf(uppercase) > -1) {
                console.log("hello 1")
            } else {
                console.log("hello 2")
            }
        }
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
                <Input type="search" placeholder="Search..." onMouseDown={handleClick} onChange={handleGetValue} name="valueInput" onKeyUp={()=>handleFilter()}/>
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