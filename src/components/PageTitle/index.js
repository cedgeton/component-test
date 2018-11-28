import React from 'react';
import styled from 'styled-components';
import {Colors, Header}  from '../../components/System';

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${Colors.grey.c900};
  line-height: 20px;
`;
const StyledHeader = styled(Header)`
  margin:0;
`;

export default class PageTitle extends React.Component {

  render(){
    return (
      <span>
        <StyledHeader>{this.props.title}</StyledHeader>
        <SubTitle>{this.props.subTitle}</SubTitle>
      </span>
    )
  }
}
