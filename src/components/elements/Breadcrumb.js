import React,{  } from "react";
import styled from 'styled-components'

import {getFader, getLighter, getDarker} from '../../utils/color'


const BreadcrumbContainer = styled.ul`
    display:flex;
    list-style:none;
    align-items:center;
`;
const StyledBreadcrumbSeparator = styled.label`
    color: ${props => getFader(props.theme.color.fill.primary,0.7)}; 
    margin: auto 5px;
    font-size: ${props => props.theme.textSize.small};
`;
const StyledBreadcrumbItem = styled.li`
    & a{
        text-decoration:none;
        font-size:${props => props.theme.textSize.medium};
        color: ${props => getFader(props.theme.color.fill.primary,0.7)}; 
    }
    &:last-child a{
        color: ${props => props.theme.color.fill.primary}; 
        font-weight: 700;
    }
    & a:hover{
        color: ${props => getLighter(props.theme.color.fill.primary, 30)};
    }
    & a:active{
        color: ${props => getDarker(props.theme.color.fill.primary)};;
    }
`;

const Breadcrumb = ({ ...props }) => (
    <BreadcrumbContainer>
          {/* Render "not last" item along with the separator*/}
          {props.children.slice(0, -1).map(child => 
              <>
                  <StyledBreadcrumbItem key={child.children}>{child}</StyledBreadcrumbItem>
                  <StyledBreadcrumbSeparator  {...props}>{'/'}</StyledBreadcrumbSeparator>
              </>)
          }
          {/* Render last item alone*/}
          <StyledBreadcrumbItem key={props.children[props.children.length-1].children}>{props.children[props.children.length-1]}</StyledBreadcrumbItem>
    </BreadcrumbContainer>
)
  
export default Breadcrumb