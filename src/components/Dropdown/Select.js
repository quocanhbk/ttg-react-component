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
    border-radius: 10px;
    border: 2px solid red;
`;

const DivInput = styled.div`
    display: flex;
    height: 100%;
    over-flow: hidden;
    border-left: 10px;
`;

const Input = styled.input`
    width: 100%;
    padding-left: 3%;
    border-radius: 10px;
    &:focus{
        outline: none;
    }
`;

const DivSelect = styled.div`
    display: none;
    position: absolute;
    background-color: #f6f6f6;
    width: 100%;
    overflow: auto;
    border: 1px solid #ddd;
    z-index: 1;
    color: white;
    border-radius: 10px;
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

    const handleClick = (e) =>{
        setvalueInput(e)
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
            </DivInput>

            <DivSelect id="myDropdown">
                <Option value="One" handleClick={()=>handleClick("One")} name="One"/>
                <Option value="Two" handleClick={()=>handleClick("Two")} name="Two"/>
                <Option value="Three" handleClick={()=>handleClick("three")} name="Three"/>
            </DivSelect>
        </SelectDiv>
    )
}

export default Select