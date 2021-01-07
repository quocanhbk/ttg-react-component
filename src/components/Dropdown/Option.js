import styled from 'styled-components'

const OptionChild = styled.a`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 10px;

    &:hover{
        :hover {background-color: #ddd;}
    }
`;

const Option = (props) =>{
    return(
        <OptionChild onClick={props.handleClick} name={props.name}>{props.value}</OptionChild>
    )
}

export default Option