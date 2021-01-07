import styled from 'styled-components'

const OptionChild = styled.a`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover{
        :hover {background-color: #ddd;}
    }
`;

const Option = (props) =>{
    return(
        <>
            <OptionChild >{props.value}</OptionChild>
        </>
    )
}

export default Option