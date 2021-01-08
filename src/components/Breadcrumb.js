import React,{  } from "react";
import styled from 'styled-components'

import {getFader, getLighter} from './../utils/color'


const ULStyte= styled.ul`
    display:flex;
    list-style:none;
    align-items:center;
`;
const LabelSeparator= styled.label`
    color: ${props => getFader(props.theme.color.fill.primary,0.7)}; 
    margin: auto 5px;
    font-size:12px;
`;
const LiItem = styled.li`
    & a{
        text-decoration:none;
        font-size:14px;
        color: ${props => getFader(props.theme.color.fill.primary,0.7)}; 
    }
    &:last-child a{
        color: ${props => getFader(props.theme.color.fill.primary,1)}; 
        font-weight:bold;
    }
    & a:hover{
        color: ${props => getLighter(props.theme.color.fill[props.color] || props.theme.color.fill.primary)};
    }
    & a:active{
        color:red;
    }
`;
// item cua Breadcrumb (mang)
const BreadcrumbItem = ({ children, ...props }) => (
    <LiItem className='breadcrumb-item' {...props}>
      {children}
    </LiItem>
)
  
//dau phan cach giua cac label links
const BreadcrumbSeparator = (props) => (
    <LabelSeparator className='breadcrumb-separator' {...props}>
      {'/'}
    </LabelSeparator>
)
  
  //
  const Breadcrumb = ({ ...props }) => {
    let children = React.Children.toArray(props.children)

    //render items
    children = children.map((child, index) => (
    <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
  ))


  //Tim va cho dau phan cach giua cac phan tu (- phan tu cuoi)
  const lastIndex = children.length - 1

  children = children.reduce((acc, child, index) => {
    const notLast = index < lastIndex
    if (notLast) {
      acc.push(
        child,
        <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
        </BreadcrumbSeparator>,
      )
    } else {
      acc.push(child)
    }
    return acc
  }, [])


    return <ULStyte>{children}</ULStyte>
  }
  
  export default Breadcrumb