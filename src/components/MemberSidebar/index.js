import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';


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
const MenuItem = styled(Icon)`
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
const Vignette = styled.div`
  height: calc(100vh - 56px);
  width: calc(100vw - 56px);
  background: rgba(0,0,0,.7);
  top: 56px;
  left: 56px;
  position: absolute;
  backdrop-filter: blur(10px);
  display: none;
`;
const PopOver = styled.div`
  width: 23vw;
  background: #fff;
  height: calc(100vh - 56px);
  position: absolute;
  left: -23vw;
  top: 56px;
  border-right: 1px solid #F3F4F6;
  z-index: 2;
`;

export default class MemberSidebar extends React.Component {

  render(){
    return (
      <Sidebar>
        <Icon name="profile-circle" color={'#2D85FB'} w={56} p={9} />
        <MenuHolder>
          <MenuItem name="event" color={'#7E8690'} w={24} p={0} />
          <MenuItem name="issues" color={'#7E8690'} w={24} p={0} />
          <MenuItem name="lab" color={'#7E8690'} w={24} p={0} />
          <MenuItem name="medication" color={'#7E8690'} w={24} p={0} />
          <MenuItem name="list" color={'#7E8690'} w={24} p={0} />
        </MenuHolder>
        <PopOver>Name</PopOver>
        <Vignette />
      </Sidebar>
    )
  }
}
