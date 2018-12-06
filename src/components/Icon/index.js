import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import icons from './icons.js';
import {Colors}  from '../../components/System';

const IconWrapper = styled.div`
  background: ${props => props.bg};
  width: ${props => props.w+'px' || "inherit"};
  height: ${props => props.w+'px' || "inherit"};
  padding: ${props => props.p+'px'};
  vertical-align: middle;
  border-radius: 100px;
  text-align:center;
  display: inline-block;
`;


class Icon extends React.Component {
  static defaultProps = {
    color: Colors.black.c600,
    bg: 'transparent',
    w: 30,
    p: 0,
  }

  render(){
    var ico = icons[this.props.name]
    var p = this.props.p;
    var w = this.props.w-p*2;
    return (
      <IconWrapper className={this.props.className} bg={this.props.bg} w={w} h={w} p={p} onClick={this.props.onClick}>
        <svg width={w+"px"} height={w+"px"} style={{fill: this.props.color}} viewBox="0 0 24 24">
          <path d={ico}></path>
        </svg>
      </IconWrapper>
    )
  }
}
Icon.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)),
  w: PropTypes.number,
  p: PropTypes.number,
}

export default Icon
