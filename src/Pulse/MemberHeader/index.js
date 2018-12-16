import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Colors, Text} from '../../Pulse/';

const Header = styled.div`
  grid-area: header;
  background: #fff;
  border-bottom: 1px solid ${Colors.grey.c400};
  box-shadow: 0 4px 0px 0 rgba(0,0,0,0.04);
  z-index: 2;
  margin-left: -1px;
  padding-top: 9px;
`;
const sites = ['SF1', 'LA1', 'LA2', 'NY1', 'NY2', 'OC1']
const mdList = ['Nate Favini', 'Barry Breaux']

class MemberHeader extends React.Component {

  render(){
    return (
      <Header>
        <Text size='title' color='contrast'>{this.props.name}</Text>
        <Text size='small' color='subtle'>{this.props.dob} &bull; {this.props.age} yo {this.props.gender} &bull; {this.props.md} &bull; {this.props.site}</Text>
      </Header>
    )
  }
}
MemberHeader.propTypes = {
  name: PropTypes.string,
  dob: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.oneOf(['Male', 'Female']),
  md: PropTypes.oneOf(mdList),
  site: PropTypes.oneOf(sites),
}
export default MemberHeader
