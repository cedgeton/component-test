import React from 'react';
import styled from 'styled-components';
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
  border-right: 1px solid #E1E4E9;
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
      fill: #2D85FB !important;
    }
  }
`;
export default class MemberSidebar extends React.Component {

  render(){
    return (
      <Sidebar>
        <Icon name="profile-circle" color={'#2D85FB'} w={56} p={9} />
        <MenuHolder>
          <MenuIcon name="event" color={'#7E8690'} w={24} />
          <MenuIcon name="issues" color={'#7E8690'} w={24} />
          <MenuIcon name="lab" color={'#7E8690'} w={24} />
          <MenuIcon name="medication" color={'#7E8690'} w={24} />
          <MenuIcon name="list" color={'#7E8690'} w={24} />
        </MenuHolder>
        <Popover links={this.props.links} selected={this.props.selected} />
      </Sidebar>
    )
  }
}
