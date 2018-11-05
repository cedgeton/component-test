import React from 'react';
import styled from 'styled-components';

const Tag = styled.span`
  border-radius: 100px;
  padding: 6px 10px;
  margin: 4px 8px 4px 0;
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  text-transform: capitalize;

  /* Color the bg and text with theme */
  background: ${props => props.bgColor};
  color: ${props => props.textColor};
`;

export default class TagObj extends React.Component {
  constructor(props) {
    super(props);
    this.theme = {
      textColor: '#fff',
      bgColor: '#2D85FB',
    };

    if (props.bg == "grey") {
      this.theme.textColor = '#616871';
      this.theme.bgColor = '#F1F2F5';
    }
    else if (props.bg == "green") {
      this.theme.bgColor = '#00C596';
    }
    else if (props.bg == "yellow") {
      this.theme.bgColor = '#FCA200';
    }
    else if (props.bg == "red") {
      this.theme.bgColor = '#EC4068';
    }
  }
  render(){
    return (
      <Tag bgColor={this.theme.bgColor} textColor={this.theme.textColor} className={this.props.className}>{this.props.text}</Tag>
    )
  }
}
