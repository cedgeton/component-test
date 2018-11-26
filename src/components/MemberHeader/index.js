import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import {Colors} from '../../components/System';

const Header = styled.div`
  grid-area: header;
  background: #fff;
  border-bottom: 1px solid ${Colors.grey.c400};
  box-shadow: 0 4px 0px 0 rgba(0,0,0,0.04);
  z-index: 2;
  margin-left: -1px;
  padding-top: 9px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${Colors.black.c400};
  line-height: 20px;
`;
const SubTitle = styled.div`
  font-weight: 300;
  font-size: 11px;
  color: ${Colors.black.c400};
  line-height: 16px;
`;

export default class MemberHeader extends React.Component {

  render(){
    return (
      <Header>
        <Title>{this.props.name}</Title>
        <SubTitle>{this.props.dob} &bull; {this.props.age} yo {this.props.gender} &bull; {this.props.md} &bull; {this.props.site}</SubTitle>
      </Header>
    )
  }
}
