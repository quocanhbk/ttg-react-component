import styled from 'styled-components'
import {React} from "react"
import TabPane from "./TabPane"
import PropTypes from "prop-types"
import { useState } from 'react';
const DivTab = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:10px;
    box-shadow: 0px 2px 1px 3px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;
const ButtonTab=styled.button`
    display:block;
    position:relative;
    border:0;
    border-radius:0;
    cursor: pointer;
    width:100%;
    padding: 5px 0;
    font-size:1rem;
    font-weight:700;
    color:${props => props.theme.textColor};
    background:${props => props.theme.fillColor};
    &:active {
        animation:  100ms ease out;
        background: ${props => props.theme.fillColor};
        box-shadow: none;
        color:#000;
        border:0;
        transition:0.5s;
      }
    
}
`;
const TabContain=styled.div`
    display:flex;
    margin-bottom:10px;
    background:${props => props.theme.fillColor};
`;
const StyleIndicator=styled.div`
    height: 3px;
    background: #f5a718;
    transition: transform 0.2s;
`;
const TabContent=styled.div`
    padding:10px;
`;

const Tabs = (props) => {
const [tabs,SetTabs]=useState(0);
const activeTab=props.children[tabs]; //click vao tab hien ra du lieu tuong ung
    return(
        <div>
            <DivTab  {...props}>
                {props.children.map((tab, i) => (
                <TabPane name={tab.props.name}>
                    <ButtonTab
                        onClick={() => {
                        SetTabs(i);
                        }}
                        key={i}
                    >
                        {tab.props.name}
                    </ButtonTab>
                </TabPane>
                ))}
            </DivTab>

        <TabContain>
        <StyleIndicator
          style={{
            width: 100 / props.children.length + "%",
            transform: `translateX(${tabs * 100}%)`
          }}
        ></StyleIndicator>
      </TabContain>
      <TabContent>{activeTab.props.children}</TabContent>
        </div>
    )
}
Tabs.propTypes = {
    selected: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ]).isRequired,
    disable:PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func
  };
  Tabs.getDefaultProps=()=> {
    return {
      selected: 0
    };
}
 Tabs.getInitialState=()=> {
    return {
      selected: this.props.selected
    };
}

export default Tabs