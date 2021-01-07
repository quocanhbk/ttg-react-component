import { useState } from 'react';
import styled from 'styled-components'
import OneSelect from './OneSelect'
const DivParent = styled.div`
    background: #ede4e4;
    width: 50%;
    margin: auto;
    display: flex;
    height: 45px;
    position: relative;
`;

const FormParent = styled.form``;

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
    background: white;
    margin: auto;
    top: 100%;
    padding: 10px;
    border-radius: 10px;
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
    const handleClick = () =>{
        setDisplayOption(!displayOption)
    }

    const handleDelete = (props) =>{
        // kiem phan tu bi xoa
        var temp = [];
        for(var i = 0; i<ArrayOption.length; i++){
            if(props === i){}
            else{
                temp.push(ArrayOption[i])
            }
        }
        setArray(temp)
    }

    // xoa tat ca option da chon
    const handleDeleteAll = () =>{
        setArray([]);
    }
    
    var OptionChoose = [];
    const handleAdd = (value,index) =>{
        // set lai option
        const OptionTemp = [];
        
        for(var i=0; i<Option.length; i++){
            if(index === i){
                OptionChoose.push(Option[index])
            }
            else{
                OptionTemp.push(Option[i])
            }
        }
        setOption(OptionTemp)
        setArray(OptionChoose)
        console.log(OptionChoose.length)
        // hien thi option da chon
    }
    // hien thi button delete
    var isDelete = false;
    if(ArrayOption.length > 0){
        isDelete = true
    }

    
    return(
        <>
            <DivParent>
                <FormParent>
                    {
                        ArrayOption.map((item, index)=>{
                            return(
                                <OneSelect value={item} key={index} handleClick={()=>handleDelete(index)}/>
                            )
                        })
                    }
                    <Input type="search" placeholder="Search..." onMouseDown={handleClick}/>
                </FormParent>
                <ButtonDelete onClick={handleDeleteAll} displayDelete={isDelete}>X</ButtonDelete>
                <AllOption display = {displayOption}>
                    {
                        Option.map((item, index)=>{
                            return(
                                <li key={index} onClick={()=>handleAdd(item,index)}>{item}</li>
                            )
                        })
                    }
                </AllOption>
            </DivParent>
            
        </>
    )
}

export default Search