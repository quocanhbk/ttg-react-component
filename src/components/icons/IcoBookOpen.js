import styled from 'styled-components'
    
const StyledSpan = styled.span`
    margin: ${props => props.left ? "0px 8px 0px 0px" : props => props.right ? "0px 0px 0px 8px" : "0px"};
    svg {
        vertical-align: middle;
    }
`;

const IcoBookOpen= (props) => {
    let color = props.color
    let fill = props.fill
    let size = props.size === 'big' ? 36 : props.size === 'small' ? 16 : 24;
    return (
        <StyledSpan {...props}><svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></StyledSpan>
    )
}
IcoBookOpen.defaultProps = {
    color: "currentColor",
    fill: "none",
    size: "normal"
}

export default IcoBookOpen