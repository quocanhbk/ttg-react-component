import styled from 'styled-components'

const StyledButton = styled.button`
    margin: ${props => props.demo? "8px": 
                props => props.ingroup === "left" ? "0px -1px 0px 0px" : 
                    props => props.ingroup === "right" ? "0px 0px 0px -1px" : "0px -1px 0px -1px"};
    padding: ${props => props.type === "outline" ? "6px 10px" : "8px 12px"};
    transition: background 0.15s linear;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    border-color: rgb(${props=>props.theme.mClr.R},${props=>props.theme.mClr.G},${props=>props.theme.mClr.B});
    outline: 0;

    color:  rgb(${props => props.type === "contained" ? props=>props.theme.tClr.R : props=>props.theme.mClr.R},
                ${props => props.type === "contained" ? props=>props.theme.tClr.G : props=>props.theme.mClr.G},
                ${props => props.type === "contained" ? props=>props.theme.tClr.B : props=>props.theme.mClr.B});

    background: rgba(${props=>props.type === "contained" ? props=>props.theme.mClr.R : '255'},
                    ${props=>props.type === "contained" ? props=>props.theme.mClr.G : '255'},
                    ${props=>props.type === "contained" ? props=>props.theme.mClr.B : '255'},
                    ${props=>props.type === "contained" ? 1 : 0}
                    );

    border-style: ${props => props.type === "outline" ? "solid": "none"};
    border-width: ${props => props.type === "outline" ? "2px": "0px"};
    border-radius: ${props => props.ingroup === "left" ? "8px 0px 0px 8px" : 
                        props => props.ingroup === "right" ? "0px 8px 8px 0px" : 
                            props => props.ingroup === "middle" ? "0px" : "8px"};
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    min-width: ${props => props.fullWidth ? "100%": "auto"};
    box-shadow: ${props => props.type === "contained" ? "0px 2px 4px rgba(0,0,0,0.32)" : "none"};

    &:hover { 
        color: rgba(${props => props.type === "contained" ? props=>props.theme.tClr.R : props=>props.theme.mClr.R},
                    ${props => props.type === "contained" ? props=>props.theme.tClr.G : props=>props.theme.mClr.G},
                    ${props => props.type === "contained" ? props=>props.theme.tClr.B : props=>props.theme.mClr.B},
                    ${props => props.type === "text" ? 0.7 : 1}
                    );
        background: rgba(
            ${props => props.type === "text" ? 'transparent' : props=>props.theme.mClr.R},
            ${props => props.type === "text" ? 'transparent' : props=>props.theme.mClr.G},
            ${props => props.type === "text" ? 'transparent' : props=>props.theme.mClr.B},
            ${props => props.type === "outline"? 0.35: 0.75}
        );
    }
    &:disabled { 
        color: #A3A3A3;
        background-color: ${props => props.type === "contained" ? "#CCC" : "transparent"};
        border: ${props => props.type === "outline" ? "2px solid #A3A3A3" : "none"};
    }
    &:active {
        color: rgb(
            ${props => props.type === "outline" ? props.theme.tClr.R : props.theme.mClr.R},
            ${props => props.type === "outline" ? props.theme.tClr.G : props.theme.mClr.G},
            ${props => props.type === "outline" ? props.theme.tClr.B : props.theme.mClr.B}
        );
        background: rgba(
            ${props => props.type === "contained" ? props.theme.tClr.R : props => props.type === "outline" ? props.theme.mClr.R : '255'},
            ${props => props.type === "contained" ? props.theme.tClr.G : props => props.type === "outline" ? props.theme.mClr.G : '255'},
            ${props => props.type === "contained" ? props.theme.tClr.B : props => props.type === "outline" ? props.theme.mClr.B : '255'},
            ${props => props.type === "text" ? 0 : 1}
            );
    }
`;
StyledButton.defaultProps = {
    theme: {
        mClr: {R: 23, G: 64, B: 145},
        tClr: {R: 255, G: 255, B: 255},
    },
    type: "contained",
    displayMode: "edit"
}

const Button = (props) => {
    return (
        <StyledButton {...props}>
        {props.children}
        </StyledButton>
    )
}

export default Button