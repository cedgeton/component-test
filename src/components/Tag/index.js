import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';
import PropTypes from 'prop-types';

const Tag = styled.span`
  border-radius: ${props => props.squared? '2px' : '100px'};
  padding: ${props =>
    {if(props.size === 'large'){
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
          return Colors.grey.c300
      case 'green':
          return Colors.green
      case 'yellow':
          return Colors.yellow
      case 'red':
          return Colors.red
      default:
          return Colors.blue
  }}};
  color: ${props => props.bg === 'grey' ? Colors.black.c400 : Colors.white};
`;

class TagObj extends React.Component {
  render(){
    return <Tag bg={this.props.bg} className={this.props.className} squared={this.props.squared} size={this.props.size}>{this.props.text}</Tag>
  }
}
TagObj.propTypes = {
  text: PropTypes.string,
  bg: PropTypes.oneOf(['blue', 'green', 'yellow', 'red', 'grey']),
  size: PropTypes.oneOf(['small','large']),
  squared: PropTypes.bool,
}

export default TagObj;
