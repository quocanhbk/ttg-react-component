import styled from 'styled-components'

const DivInput = styled.div`
    font-size: 16px;
    position: relative;
    height: 50px;
    overflow: hidden;

    input:focus + label,
    input:valid + label
     {
         transform: translateY(-50%);
         font-size: 13px;
         color: blue;
     }

    input:focus + label::after,
    input:valid + label::after{
        transform: translateX(0%);
    }

    label{
        position: absolute;
        bottom: -25px;
        left: 2%;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
`;

const InputComponent = styled.input`
    width: 100%;
    height: 100%;
    padding-left: 2%;
    color: gray;
    padding-top: 20px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
`;

const LabelComponent = styled.label`
    position: absolute;
    bottom: -5px;
    left: 2%;
    transition: all 0.3s ease;

    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-bottom: 3px solid red;
        bottom: -1px;
        left: -2%;
        transform: translateX(-100%);
        transition: all 0.3s ease;
    }
`;

const SpanComponent = styled.span``;

const TextInput = (props) =>{
    return(
        <DivInput>
            <InputComponent type="text" name="input_text" autoComplete="off" required/>
            <LabelComponent htmlFor="name" >
                <SpanComponent>Name</SpanComponent>
            </LabelComponent>
        </DivInput>
    )
}

export default TextInput