import styled from 'styled-components'

const Form = styled.form`
    background-color: #8080803d;
    margin-top: 10px;
    padding: 10px;
`;

const TextField = styled.label`
    margin-right: 10px;
    display:block;
`;

const InputDate = styled.input`
    border: none;
    border-bottom: 3px solid gray;
    background: none;
    color: ${props => props.color ? "wheat" : "blue"};
    &:hover{
        border-bottom: 3px solid black;
    }
    &:focus{
        border: none;
    }
`;

const handleChangeDate = (props) =>{
    var element = document.getElementById(props);
    console.log(element.value);
}

const FormDate = (props) =>{
    // get current date
    var Current = new Date();
    var CurrentDate = Current.getDate();
    var CurrentMonth = Current.getMonth() + 1;
    var CurrentYear = Current.getFullYear();
    var MonentDay =  CurrentYear + "-" + CurrentMonth + "-" + CurrentDate ;
    return(
        <>
            <Form>
                <TextField>{props.title}</TextField>
                <InputDate type="date" color={props.color} id={props.id} defaultValue={(MonentDay)} onChange={()=>handleChangeDate(props.id)}></InputDate>
            </Form>
        </>
    )
}

export default FormDate