import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';


const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: ${Colors.black.c800.hex()};
  letter-spacing: 0.5px;
  line-height: 28px;
`;
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
        <Title>{this.props.title}</Title>
        <SubTitle>{this.props.subTitle}</SubTitle>
      </span>
    )
  }
}
