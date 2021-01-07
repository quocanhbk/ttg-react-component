import styled from 'styled-components'
const DivSelect = styled.div`
    margin-left: 10px;
    display: inline-block;
`;

const DivText = styled.div`
    box-shadow: 0 0 0 1px #bac8d3;
    border-radius: 2px;
    padding-left: 4px;
    margin: 10px 10px 10px 0;
    font-size: 14px;
    color: white;
    background: gray;
    width: 100%;
`;

const Remove = styled.span`
    isplay: inline-block;
    width: 19px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-weight: 700;
    cursor: pointer;
    color: white;
    margin-left: 5px;

    &:hover{
        color: red;
    }
`;
const OneSelect = (props)=>{
    return(
        <DivSelect>
            <DivText>
                {props.value}
                <Remove onClick={props.handleClick}>X</Remove>
            </DivText>
        </DivSelect>
    )
}
export default OneSelect