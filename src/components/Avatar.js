import React from "react"
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DivStyle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
 
`;

const LabelImg = styled.label`
    display:block;
    font-size:16px;
    font-weight:bold;
    color:${props => props.displayMode === "disabled" ? props.theme.color.text.disabled: props.theme.color.text.primary};

`;

const Avatar = (props) => {
    let inner = null;

    const ImgStyle = styled.img`
    display:block;
    width:  ${props => props.theme.avatarSize[props.size] || "48px" };
    height:  ${props => props.theme.avatarSize[props.size] || "48px" };
    min-height: ${props => fluid ? "100%" : "48px"};
    min-width: ${props => fluid ? "100%" : "48px"};
    border-radius:50%;
    border:1px solid #fff;
`;
const DivImg = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:  ${props => props.theme.avatarSize[props.size] || "48px" };
    height:  ${props => props.theme.avatarSize[props.size] || "48px" };
    min-height: ${props => fluid ? "100%" : "48px"};
    min-width: ${props => fluid ? "100%" : "48px"};
    border-radius:50%;
    border:1px solid #fff;
    background: ${props => props.theme.color.border.primary}; 
`;
let fluid=props.fluid
let strNameImg = props.alt
let  lastName = strNameImg.split(' ').slice(-1).join(' ');
let NameImg =lastName.split(/\s/).reduce((response,word)=> response+=word.toUpperCase().slice(0,1),'')

      if (props.src) {
        inner = <ImgStyle alt={props.alt} src={props.src} ></ImgStyle>
      } else if (props.src==="") {
        inner = (
          <DivImg
              className="avatar-icon"
              fill="#ffffff"
              textAnchor="middle"
              alt={props.alt}>
                  <LabelImg>{NameImg}</LabelImg>
            </DivImg>
        );
        }
        return(
                <DivStyle className="avatar" {...props}>
                    {inner}
                    {props.children}
                </DivStyle>
        )
    }
    Avatar.defaultProps = {
        alt: "",
        fluid: false
    }
    Avatar.propTypes={
        fluid:PropTypes.bool,
        alt: PropTypes.string
    }
export default Avatar