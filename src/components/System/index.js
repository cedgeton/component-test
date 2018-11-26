import React from 'react';
import styled  from 'styled-components';

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
}


const HeaderStyle = styled.div`
  font-size: ${props => {
    switch(props.level) {
      case 0:
        return '40px'
      case 2:
        return '16px'
      default:
        return '20px'
  }}};
  line-height: ${props => {
    switch(props.level) {
      case 0:
        return '40px'
      case 2:
        return '24px'
      default:
        return '28px'
  }}};
  font-weight: ${props => {
    switch(props.level) {
      case 0:
        return '400'
      default:
        return '500'
  }}};
  color: ${Colors.black.c800};
  margin: 0;
`;

export class Header extends React.Component {
  render(){
    return <HeaderStyle className={this.props.className} level={this.props.level}>{this.props.children}</HeaderStyle>

  }
}
