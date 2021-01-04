import styled from 'styled-components'

const SelectComponent = styled.select`
    border-radius: .28571429rem;
    cursor: pointer;
    padding: 8px;
    color: ${props => props.color ? "white" : "rgba(0,0,0,.6)"};
    background-color: ${props => props.background ? "rgb(165,156,135)" : "rgb(0 0 0 / 10%)"};
    border: none;
    margin-top: 10px;
    margin-right: 10px;
    &:hover{
        background-color: #cacbcd;
        color: black;
    }
`;

const Optioncomponent = styled.option`
    border-radius: 10%;
`;

const handleSelectVale = (value)=>{
    var valueSelect = document.getElementById(value);
    console.log(valueSelect.value);
}
const CustomSelect = (props) =>{
    return (
        <>
            <SelectComponent color={props.color} background={props.background} id={props.id} onChange={()=>handleSelectVale(props.id)}>
                {
                    props.data.map((value, index)=>{
                        return(
                            <Optioncomponent key={index} value={value.name}>{value.name}</Optioncomponent>
                        )
                    })
                }
            </SelectComponent>
        </>
    )
}


export default CustomSelect