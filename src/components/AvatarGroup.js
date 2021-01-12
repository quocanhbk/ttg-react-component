import  React from "react"
import styled from "styled-components"
import  PropTypes from "prop-types"
import Avatar from "./Avatar";





const AvatarGroup = (props) =>{
const {
    children: childrenProp,
    max=5,
    ref,
    sizeGroup
} = props

const AvatarPlus= styled.div`
    background: ${props => props.theme.color.border.primary}; 
    width:  ${props => props.theme.avatarSize[sizeGroup] || "48px" };
    height:  ${props => props.theme.avatarSize[sizeGroup] || "48px" };
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    border:1px solid #fff;
    font-weight:bold;
`;
const DivStyle= styled.div`
    display:flex;
    margin-left: 10px;
    align-items:center;
    &>div{
        margin-left:-10px;
    }
    & img{
        width:  ${props => props.theme.avatarSize[sizeGroup] || "48px" };
        height:  ${props => props.theme.avatarSize[sizeGroup] || "48px" };
    }
    &>div>div{
        width:  ${props => props.theme.avatarSize[sizeGroup] || "48px" };
        height:  ${props => props.theme.avatarSize[sizeGroup] || "48px" };
    }
    & .avatar-max-limited{
        width:  ${props => props.theme.avatarSize[sizeGroup] || "48px" };
        height:  ${props => props.theme.avatarSize[sizeGroup] || "48px" };
    }
`;

const clampedMax= max<2 ? 2 : max
const children = React.Children.toArray(childrenProp)  
const extraAvatars = children.length > clampedMax ? children.length - clampedMax + 1 : 0

    return(
        <DivStyle ref={ref} {...props}>
      {children.slice(0, children.length - extraAvatars).map((child, index) => {
        return React.cloneElement(child, {
          style: {
            zIndex: children.length - index,
            ...child.props.style,
          },
        });
      })}
      {extraAvatars ? (
        <AvatarPlus
            className="avatar-max-limited"
          style={{
            zIndex: 0,
          }}
        >
          +{extraAvatars}
        </AvatarPlus>
      ) : null}
    </DivStyle>
    )
}
export default AvatarGroup