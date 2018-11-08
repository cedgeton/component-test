import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';


const Sidebar = styled.div`
  grid-area: sidebar;
  background: #fff;
  border-right: 1px solid #E1E4E9;
  box-shadow: 3px 4px 1px 0 rgba(0,0,0,0.06);
  text-align: center;
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
const ProfileIcon = styled(Icon)`
  margin-bottom: 7px;
`;

export default class MemberSidebar extends React.Component {

  render(){
    return (
      <Sidebar>
        <ProfileIcon name="profile-circle" color={'#2D85FB'} w={56} p={9} />
        <MenuItem name="event" color={'#7E8690'} w={24} p={0} />
        <MenuItem name="issues" color={'#7E8690'} w={24} p={0} />
        <MenuItem name="lab" color={'#7E8690'} w={24} p={0} />
        <MenuItem name="medication" color={'#7E8690'} w={24} p={0} />
        <MenuItem name="list" color={'#7E8690'} w={24} p={0} />
      </Sidebar>
    )
  }
}
