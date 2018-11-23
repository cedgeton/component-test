import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';
import Icon from '../../components/Icon';
import Popover from '../../components/Popover';


const Sidebar = styled.div`
  grid-area: sidebar;
  background: #fff;
  box-shadow: 3px 4px 1px 0 rgba(0,0,0,0.04);
  text-align: center;
  z-index: 2;
`;
const MenuHolder = styled.div`
  background: #fff;
  border-right: 1px solid ${Colors.grey.c400.hex()};
  padding-top: 7px;
  height: calc(100vh - 56px);
  z-index: 3;
  position: relative;
`;
const MenuIcon = styled(Icon)`
  display: block;
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
  &:hover {
    cursor: pointer;
    svg{
      fill: ${Colors.blue.hex()} !important;
    }
  }
`;
export default class MemberSidebar extends React.Component {

  render(){
    var iconColor = Colors.black.c300.hex();
    return (
      <Sidebar>
        <Icon name="profile-circle" color={Colors.blue.hex()} w={56} p={9} />
        <MenuHolder>
          <MenuIcon name="event" color={iconColor} w={24} />
          <MenuIcon name="issues" color={iconColor} w={24} />
          <MenuIcon name="lab" color={iconColor} w={24} />
          <MenuIcon name="medication" color={iconColor} w={24} />
          <MenuIcon name="list" color={iconColor} w={24} />
        </MenuHolder>
        <Popover links={this.props.links} selected={this.props.selected} />
      </Sidebar>
    )
  }
}
