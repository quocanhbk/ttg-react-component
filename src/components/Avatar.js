import React from "react"
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DivStyle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const LabelName = styled.label`
    display:block;
    font-size:14px;
    font-weight:normal;
    color:${props => props.displayMode === "disabled" ? props.theme.color.text.disabled: props.theme.color.text.primary};

`;
const Avatar = (props) => {
      let inner = null;
    const size=props.size

    const ImgStyle = styled.img`
    display:block;
    width:  ${props => props.theme.avatarSize[size] || "48px" };
    height: ${props => props.theme.avatarSize[size] || "48px" };
    border-radius:50%;
`;
      if (props.src) {
        inner = <ImgStyle src={props.src} ></ImgStyle>
      } else {
        inner = (
          <svg>
            <rect x="0" y="0" ></rect>
            <text
              className="avatar-icon"
              fill="#ffffff"
              textAnchor="middle">
            </text>
          </svg>
        );
        }
        return(
                <DivStyle className="avatar" {...props}>
                    {inner}
                    <LabelName>{props.children}</LabelName>
                </DivStyle>
        )
    }
    Avatar.defaultProps = {
        size: "medium"
    }
    Avatar.propTypes={
        size:PropTypes.string
    }
export default Avatar