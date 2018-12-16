import React from 'react';
import styled from 'styled-components';
import {Colors, Icon, Popover, Avatar}  from '../../Pulse/';


const Sidebar = styled.div`
  grid-area: sidebar;
  background: #fff;
  box-shadow: 3px 4px 1px 0 rgba(0,0,0,0.04);
  text-align: center;
  z-index: 2;
`;
const MenuHolder = styled.div`
  background: #fff;
  border-right: 1px solid ${Colors.grey.c400};
  padding-top: 7px;
  height: calc(100vh - 56px);
  z-index: 3;
  position: relative;
`;
const AvaHolder = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const HeaderAvatar = styled(Avatar)`
  margin-right:0;
`;
const MenuIcon = styled(Icon)`
  display: block;
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
  &:hover {
    cursor: pointer;
    svg{
      fill: ${Colors.blue} !important;
    }
  }
`;
class MemberSidebar extends React.Component {

  render(){
    var iconColor = Colors.black.c300;
    return (
      <Sidebar>
        <AvaHolder>
          <HeaderAvatar type='defaultProfile' size='medium' />
        </AvaHolder>
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
export default MemberSidebar
