import styled from 'styled-components'

const DivParent = styled.div`
    width: 600px;
    margin: auto;
    display: block;
`;

const ListOption = styled.ul`
    z-index: 1;
    list-style: none;
    padding: 4px 6px;
    border: 1px solid #A6A6A6;
    background-color: white;
    border-radius: 3px;
    cursor: text;
    position: relative;
    will-change: transform;
    flex-wrap: wrap;
    display: flex;
`;

// khi user choose option
const LiOfOption = styled.li`
    background-color: #F5F7F8;
    border: 1px solid #C1C7CF;
    color: #7C8E9A;
    border-radius: 3px;
    padding: 3px 8px;
    margin-right: 6px;
    margin-top: 2px;
    margin-bottom: 2px;

    &:hover{
        background: gray;
        color: white;
        cursor: pointer;
    }
`;

const ButtonDelete = styled.span`
    font-size: 1rem;
    margin-right: 5px;
    cursor: pointer;
    padding: 0 5%;

    &:hover{
        background: red;
        color:white;
    }
`;

const LiOfListOption = styled.li`
    display: inline-flex;
`;

const DivAllOption = styled.div`
    display: inline-flex;
`;

const Input = styled.input`
    padding-right: 20px;
    width: 100%;
    border: none;
    outline: 0;
    margin-top: 6px;
    margin-bottom: 6px;
    border-bottom: 1px solid black;
`;

const SpanDelete = styled.span`
    margin-top: 6px;
    margin-bottom: 6px;
    cursor: pointer;
    background: gray;
    position: absolute;
    top: 2px;
    right: 27px;
    padding: 3px 10px;
    display: ${props => props.displayDelete === true ? undefined : 'none'};

    &:hover{
        background: red;
        color: white;
    }
`;

const Span = styled.span`
    display: inline-block;
    position: absolute;
    cursor: default;
    outline: none;
    top: 2px;
    right: 6px;
    font-size: 14px;
    cursor: default;
    font-size: 205%;
    &:hover{
        cursor: pointer;
    }
`;

const DivDropList = styled.div`
    display: ${props => props.display ? undefined : 'none'};
    position: absolute;
    z-index: 1;
    border: 1px solid #aaa;
    background: #fff;
    top: 100%;
    left: 0;
    padding: 5px 0px;
    max-height: 400px;
    overflow: auto;
    font-size: 12px;
    font-family: sans-serif;
    width: 100%;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    opacity: ${props => props.opacity ? '1' : '0'};
`;

const Tag = styled.div`
    background: #80808063;
    margin-bottom: 1%;
    padding: 1%;
    cursor: pointer;

    &:hover{
        background: gray;
        color: white;
    }
`;  

const ComboBox = (props)=>{
    return(
        <DivParent>
            <ListOption>
                {/* option user choose */}
                {/* {
                    Choose.map((item,index)=>{
                        return(
                            <LiOfOption key={index}>
                                <ButtonDelete onClick={()=>handleDelete(index)}>X</ButtonDelete>
                                {item}
                            </LiOfOption>
                        )
                    })
                } */}
                {/* end option user choose */}
                
                <LiOfListOption>
                    <DivAllOption>
                        <Input name="search" placeholder="Search..." autocomplete="off" spellcheck="false" aria-label="Start typing to search. Press the down arrow to navigate results. If you don't find an acceptable option, you can enter an alternative." aria-expanded="false" aria-haspopup="true" aria-autocomplete="list" aria-owns="ic-tokeninput-list-1" role="combobox" data-reactid=".0.1.1.0.2"                         

                        />
                        <SpanDelete>X</SpanDelete>
                        <Span>▾</Span>
                        <DivDropList opacity>
                            <Tag>One</Tag>
                        </DivDropList>
                    </DivAllOption>
                </LiOfListOption>

            </ListOption>
        </DivParent>
    )
}

export default ComboBox