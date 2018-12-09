import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';

const PanelStyle = styled.section`
  margin: 21px 0 0 0;
  background: ${Colors.white};
  border: 1px solid ${Colors.grey.c400};
  box-shadow: 2px 2px 1px 0 rgba(0,0,0,0.04);
  box-sizing: border-box;
  text-align: left;
`;


export default class Panel extends React.Component{
  render(){
    return <PanelStyle>{this.props.children}</PanelStyle>
  }
}
