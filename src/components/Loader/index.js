import React from 'react';
import styled, { keyframes }  from 'styled-components';


const rotate = keyframes`
    100% {transform: rotate(360deg);}
`;
const dash = keyframes`
    0% {stroke-dasharray: 1, 200; stroke-dashoffset: 0;}
    50% {stroke-dasharray: 89, 200; stroke-dashoffset: -35px;}
    100% {stroke-dasharray: 89, 200;stroke-dashoffset: -124px;}
`;
const color = keyframes`
    100%, 0% {stroke: #EC4068;}
    40% {stroke: #2D85FB;}
    66% {stroke: #00A978;}
    80%, 90% {stroke: #FCA200;}
`;

const Loading = styled.div`
  position: relative;
  display:inline-block;
  margin: 5px;
  width: ${props => {
    if(props.size === 'small'){return '25px'}
    else if(props.size === 'large'){return '75px'}
    else {return '45px'}
  }};
  &:before{
    content: '';
    display: block;
    padding-top: 100%;
  }
`;
const Circular = styled.svg`
  animation: ${rotate} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const Path = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${dash} 1.5s ease-in-out infinite, ${color} 6s ease-in-out infinite;
  stroke-linecap: round;
  stroke-width: ${props => {
    if(props.size === 'small'){return '5'}
    else {return '3'}
  }};
  stroke-miterlimit: 10;
`;




export default class Loader extends React.Component {

  render(){
    return(
      <Loading size={this.props.size}>
        <Circular viewBox="25 25 50 50">
          <Path cx="50" cy="50" r="20" fill="none"/>
        </Circular>
      </Loading>
    )
  }
}
