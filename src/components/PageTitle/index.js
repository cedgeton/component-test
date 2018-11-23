import React from 'react';
import styled from 'styled-components';
import {Colors, Header}  from '../../components/System';

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${Colors.grey.c900.hex()};
  line-height: 20px;
`;

export default class PageTitle extends React.Component {

  render(){
    return (
      <span>
        <Header>{this.props.title}</Header>
        <SubTitle>{this.props.subTitle}</SubTitle>
      </span>
    )
  }
}
