import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../Pulse/System';

const PanelStyle = styled.section`
  margin: 21px 0 0 0;
  background: ${Colors.white};
  border: 1px solid ${Colors.grey.c400};
  box-shadow: 2px 2px 1px 0 rgba(0,0,0,0.04);
  box-sizing: border-box;
  text-align: left;
  padding: ${props => props.padding ? '20px' : 0 }
`;


export default class Panel extends React.Component{
  render(){
    return <PanelStyle padding={this.props.padding}>{this.props.children}</PanelStyle>
  }
}
