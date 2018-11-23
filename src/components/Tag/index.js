import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';

const Tag = styled.span`
  border-radius: ${props => props.squared? '2px' : '100px'};
  padding: ${props =>
    {if(props.big){
        return '6px 10px'
      } else if(props.squared){
        return '2px 5px'
      } else{
        return '2px 9px';
      }
    }
  };
  margin: 4px 8px 4px 0;
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  text-transform: capitalize;
  background: ${props => {
    switch(props.bg) {
      case 'grey':
          return Colors.grey.c300.hex()
      case 'green':
          return Colors.green.hex()
      case 'yellow':
          return Colors.yellow.hex()
      case 'red':
          return Colors.red.hex()
      default:
          return Colors.blue.hex()
  }}};
  color: ${props => props.bg == 'grey' ? Colors.black.c400.hex() : Colors.white.hex()};
`;

export default class TagObj extends React.Component {
  render(){
    return <Tag bg={this.props.bg} className={this.props.className} squared={this.props.squared} big={this.props.big}>{this.props.text}</Tag>
  }
}
