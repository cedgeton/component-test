import React from 'react';
import styled from 'styled-components';
import PopoverSidebar from '../../components/PopoverSidebar';
import Issue from '../../components/Issue';


const PopoverWrapper = styled.div`
  background: #fff;
  height: calc(100vh - 56px);
  position: absolute;
  left: 56px;
  top: 56px;
  width: 85vw;
  max-width: 1100px;
  border-right: 1px solid #F3F4F6;
  text-align:left;
  z-index: 2;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0;
  left: -85vw;
  transition: left 200ms cubic-bezier(0.755, 0.050, 0.855, 0.060);
`;
const PopoverContent = styled.div`
  padding: 26px 26px 32px;
`;
const Vignette = styled.div`
  height: calc(100vh - 56px);
  width: calc(100vw - 56px);
  background: rgba(0,0,0,1);
  top: 56px;
  left: 56px;
  position: absolute;
  backdrop-filter: blur(10px);
  display: none;
  opacity: 0;
  transition: opacity 200ms cubic-bezier(0.755, 0.050, 0.855, 0.060);
`;

export default class Popover extends React.Component {
  render(){
    return ([
      <PopoverWrapper>
        <PopoverSidebar links={this.props.links} selected={this.props.selected}  />
        <PopoverContent>
          <Issue issue={this.props.selected.issue} />
        </PopoverContent>
      </PopoverWrapper>,
      <Vignette />
    ])
  }
}
