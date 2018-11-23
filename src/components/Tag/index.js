import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';

const Tag = styled.span`
  border-radius: ${props => props.squared? '2px' : '100px'};
  padding: ${props => props.squared? '2px 5px' : '2px 9px'};
  margin: 4px 8px 4px 0;
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  text-transform: capitalize;

  /* Color the bg and text with theme */
  background: ${props => props.bgColor};
  color: ${props => props.textColor};
`;
const BigTag = styled(Tag)`
  padding: 6px 10px;
`;

export default class TagObj extends React.Component {
  constructor(props) {
    super(props);
    this.theme = {
      textColor: '#fff',
      bgColor: Colors.blue.hex(),
    };

    if (props.bg == "grey") {
      this.theme.textColor = Colors.black.c400.hex();
      this.theme.bgColor = Colors.grey.c300.hex();
    }
    else if (props.bg == "green") {
      this.theme.bgColor = Colors.green.hex();
    }
    else if (props.bg == "yellow") {
      this.theme.bgColor = Colors.yellow.hex();
    }
    else if (props.bg == "red") {
      this.theme.bgColor = Colors.red.hex();
    }
  }
  render(){
    if(this.props.big){
      return <BigTag bgColor={this.theme.bgColor} textColor={this.theme.textColor} className={this.props.className} squared={this.props.squared}>{this.props.text}</BigTag>
    }else{
      return <Tag bgColor={this.theme.bgColor} textColor={this.theme.textColor} className={this.props.className} squared={this.props.squared}>{this.props.text}</Tag>
    }
  }
}
