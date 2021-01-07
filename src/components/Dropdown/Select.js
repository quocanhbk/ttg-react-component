import { useState } from 'react';
import styled from 'styled-components'
import Option from './Option'

const SelectDiv = styled.div`
    position: relative;
    display: inline-block;
    width: 300px;
    height: 33px;
    .show {display: block;}
    margin: 10px;
`;

const DivInput = styled.div`
    display: flex;
    height: 100%;
`;

const Input = styled.input`
    width: 66%;
    padding-left: 3%;
    &:focus{
        outline: none;
    }
`;

const ButtonFilter = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 0px 10px 0px 10px;
    font-size: 1.1em;
    border: none;
    cursor: pointer;
    outline: none;
    max-height: 100%;

    &:hover{
        background-color: #3e8e41;
        color: black;
    }

    &:focus{
        background-color: #3e8e41;
    }
`;

const DivSelect = styled.div`
    display: none;
    position: absolute;
    background-color: #f6f6f6;
    width: 90%;
    overflow: auto;
    border: 1px solid #ddd;
    z-index: 1;
    color: white;
`;

const Select = (props) =>{
    const [valueInput, setvalueInput] = useState("");

    const myFunction = () =>{
        document.getElementById("myDropdown").classList.toggle("show");
    }

    const filterFunction = () =>{
        var input = document.getElementById("myInput");
        var filter = input.value.toUpperCase();
        var div = document.getElementById("myDropdown");
        var a = div.getElementsByTagName("a");
        for (var i = 0; i < a.length; i++) {
            var txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
            } else {
            a[i].style.display = "none";
            }
        }
    }

    const GetValue = (e) =>{
        setvalueInput(e.target.value)
    }
    
    return(
        <SelectDiv>
            <DivInput>
                <Input
                    type="text" 
                    placeholder="search..." 
                    onKeyUp={()=>filterFunction()} 
                    onClick={()=>myFunction()} 
                    id="myInput" 
                    name="search"
                    onChange={GetValue}
                    value={valueInput}
                />
                <ButtonFilter onClick={()=>myFunction()}>Filter here</ButtonFilter>
            </DivInput>

            <DivSelect id="myDropdown">
                <Option value="One"/>
                <Option value="Two"/>
                <Option value="Three"/>
            </DivSelect>
        </SelectDiv>
    )
}

export default Select