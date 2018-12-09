import React from 'react';
import styled  from 'styled-components';
import PropTypes from 'prop-types';

export const Colors = {
  blue: '#2D85FB',
  white: '#ffffff',
  green: '#00C596',
  red: '#EC4068',
  yellow: '#FCA200',
  purple: '#735BFA',
  pink: '#A600A3',
  black: {
    c900: '#07090A',
    c800: '#1F262D',
    c700: '#283038',
    c600: '#454D54',
    c500: '#525A62',
    c400: '#616871',
    c300: '#7E8690',
    c200: '#969EA8',
    c100: '#A5ADB5',
  },
  grey: {
    c900: '#8C93A0',
    c800: '#9CA4B1',
    c700: '#A7AFBC',
    c600: '#B5BBC6',
    c500: '#CBCFD7',
    c400: '#E1E4E9',
    c300: '#F1F2F5',
    c200: '#F8F9FB',
    c100: '#FCFCFD',
  },
  gradient: {
    blueGreen: 'linear-gradient(45deg, #2D85FB 0%, #00C596 100%)',
    bluePink: 'linear-gradient(45deg, #2D85FB 0%, #A600A3 100%)',
    purplePink: 'linear-gradient(45deg, #735BFA 0%, #A600A3 100%)',
    pinkRed: 'linear-gradient(45deg, #A600A3 0%, #EC4068 100%)',
    pinkYellow: 'linear-gradient(45deg, #A602A2 0%, #FF8811 100%)',
  }
}


const HeaderStyle = styled.div`
  font-size: ${props => {
    switch(props.size) {
      case 'huge':
        return '32px'
      case 'component':
        return '16px'
      default:
        return '20px'
  }}};
  line-height: 1.25;
  font-weight: ${props => props.size === 'huge' ? 400 : 500};
  color: ${Colors.black.c800};
  margin-bottom: ${props => {
    switch(props.bottom) {
      case 'large':
        return '24px'
      case 'medium':
        return '12px'
      case 'none':
        return '0'
      default:
        return '5px'
  }}};
`;

export class Header extends React.Component {
  static defaultProps = {
    size: 'page'
  }
  render(){
    return (
      <HeaderStyle
        className={this.props.className}
        size={this.props.size}
        bottom={this.props.bottom}
      >
        {this.props.children}
      </HeaderStyle>)
  }
}
Header.propTypes = {
  size: PropTypes.oneOf(['huge', 'page', 'component']),
  bottom: PropTypes.oneOf(['none','large', 'medium', 'small']),
}

const BodyStyle = styled.span`
  display: block;
  font-weight: ${props=> props.size === 'title' ? 500 : 400}
  margin-bottom: ${props => {
    switch(props.bottom) {
      case 'large':
        return '24px'
      case 'medium':
        return '12px'
      case 'small':
        return '6px'
      default:
        return '0px'
  }}};
  font-size: ${props => {
    switch(props.size) {
      case 'title':
        return '14px'
      case 'small':
        return '11px'
      case 'large':
        return '13px'
      default:
        return '12px'
  }}};
  line-height: ${props => {
    switch(props.spacing) {
      case 'tight':
        return 1.25
      case 'loose':
        return 2
      default:
        return 1.5
  }}};
  color: ${props => {
    switch(props.color) {
      case 'subtle':
        return Colors.grey.c900
      case 'contrast':
        return Colors.black.c800
      case 'nonessential':
        return Colors.grey.c600
      default:
        return Colors.black.c400
  }}};
  ${props=> {
    if(props.numLines != null){
      return `overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: ${props.numLines};
        -webkit-box-orient: vertical;`
    }}}
`;
export class Text extends React.Component {
  static defaultProps = {
    size: 'default',
    color: 'default',
    numLines: null,
    spacing: 'default',
    bottom: 'none'
  }
  render(){
    return(
      <BodyStyle
        className={this.props.className}
        size={this.props.size}
        numLines={this.props.numLines}
        color={this.props.color}
        spacing={this.props.spacing}
        bottom={this.props.bottom}
      >
        {this.props.children}
      </BodyStyle>
  )}
}
Text.propTypes = {
  size: PropTypes.oneOf(['default','small','large','title']),
  color: PropTypes.oneOf(['subtle','default','contrast','nonessential']),
  numLines: PropTypes.number,
  spacing: PropTypes.oneOf(['tight','default','loose']),
  bottom: PropTypes.oneOf(['none','large', 'medium', 'small']),
}

const CapStyle = styled(BodyStyle)`
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${props => {
    switch(props.size) {
      case 'large':
        return '13px'
      default:
        return '11px'
  }}};
  color: ${props => {
    switch(props.color) {
      case 'subtle':
        return Colors.grey.c900
      case 'contrast':
        return Colors.black.c800
      case 'nonessential':
        return Colors.grey.c600
      case 'warning':
        return Colors.yellow
      default:
        return Colors.black.c400
  }}};
`;

export class Caps extends React.Component {
  static defaultProps = {
    size: 'default',
    color: 'subtle',
    spacing: 'default',
    bottom: 'none'
  }
  render(){
    return(
      <CapStyle
        className={this.props.className}
        size={this.props.size}
        color={this.props.color}
        spacing={this.props.spacing}
        bottom={this.props.bottom}
      >
        {this.props.children}
      </CapStyle>
  )}
}
Caps.propTypes = {
  size: PropTypes.oneOf(['default','large']),
  color: PropTypes.oneOf(['subtle','default','contrast','nonessential', 'warning']),
  spacing: PropTypes.oneOf(['tight','default','loose']),
  bottom: PropTypes.oneOf(['none','large', 'medium', 'small']),
}
