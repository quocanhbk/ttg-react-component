import styled from 'styled-components'
import Prototype from 'prop-types'

const DivTab = styled.div`
    display:block;
    flex:1;
    background:#eee;
    
`;
const TabPane = (props) => {
    return(
        <DivTab {...props}>
        </DivTab>
    )
}
TabPane.prototype={
    name:Prototype.string,
    title:Prototype.string
}

export default TabPane