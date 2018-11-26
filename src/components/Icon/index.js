import React from 'react';
import styled from 'styled-components';
import icons from './icons.js';

const IconWrapper = styled.div`
  background: ${props => props.bg || "transparent"};
  width: ${props => props.w+'px' || "inherit"};
  height: ${props => props.w+'px' || "inherit"};
  padding: ${props => props.p+'px'};
  vertical-align: middle;
  border-radius: 100px;
  text-align:center;
  display: inline-block;
`;


export default class Icon extends React.Component {
  render(){
    var ico = icons[this.props.name]
    var p = this.props.p != null ? this.props.p : 0;
    var w = this.props.w != null ? this.props.w-p*2 : 30;
    return (
      <IconWrapper className={this.props.className} bg={this.props.bg} w={w} h={w} p={p} onClick={this.props.onClick}>
        <svg width={w+"px"} height={w+"px"} style={{fill: this.props.color}} viewBox="0 0 24 24">
          <path d={ico}></path>
        </svg>
      </IconWrapper>
    )
  }
}
