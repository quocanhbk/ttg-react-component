import React from "react"
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DivStyle = styled.div`
    display:block;

`;
const ImgStyle = styled.img`
    display:block;
    width:  ${props => props.theme.avatarSize[props.size] || "48px" };
    height: ${props => props.theme.avatarSize[props.size] || "48px" };
    border-radius:50%;
`;
const LabelName = styled.label`
    display:block;
    font-size:14px;
    font-weight:normal;
`;
const Avatar = (props) => {
      let inner = null;

  
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
            <>
                <DivStyle className="avatar" {...props}>
                    {inner}
                    <LabelName>{props.children}</LabelName>
                </DivStyle>
            </>
        )
    }
    Avatar.defaultProps = {
        size: "medium"
    }
export default Avatar