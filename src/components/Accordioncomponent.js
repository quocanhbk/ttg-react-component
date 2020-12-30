import styled from 'styled-components'
const Accordion = styled.div`
    margin-top: 10px;
`;

const ButtonAccordion = styled.button`
    padding:  8px 20px 8px 20px;
    color: black;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        background-color: rgba( 165, 156, 135, 0.75 );
        color: rgba(20, 16, 16, 1 );
    }
`;

const ContentAccordion = styled.p`
    background-color: ${props => props.background ? "rgb(141 138 133)" : "#cacbcd"};

`;

const AccordionComponent = (props) =>{
    return (
        <Accordion>
            <ButtonAccordion>Click</ButtonAccordion>
            <ContentAccordion>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </ContentAccordion>
        </Accordion>
    )
}

export default AccordionComponent