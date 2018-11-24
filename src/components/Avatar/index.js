import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';
import Icon  from '../../components/Icon';


const Ava = styled.div`
  width: ${props => props.w+'px'};
  height: ${props => props.w+'px'};
  border-radius: 50%;
  font-size: ${props => {
    switch(props.size) {
      case 'small':
        return '8px'
      case 'medium':
        return '12px'
      default:
        return '16px'
  }}};
  background: ${props => {
    if(props.type === 'image'){
      return 'url('+props.url+')'
    }else if(props.type === 'default-profile'){
      return
    }else{return getColor(props.color)}
  }};
  box-shadow: ${props => props.type === 'image' ? 'inset 0 0 2px rgba(0,0,0,.2)': '' };
  background-size: cover;
  color: ${Colors.white.hex()};
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
`;
const AvaText = styled.h4`
  align-self: center;
  font-size: 1em;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -.025em;
  text-transform: uppercase;
`;

function getWidth(size){
  switch(size) {
      case 'small':
        return {w:17, p:6};
      case 'medium':
        return {w:30, p:8};
      default:
        return {w:38, p:12}
  }
}
function getColor(color){
  switch(color) {
    case 'green':
      return Colors.green.hex()
    case 'yellow':
      return Colors.yellow.hex()
    case 'red':
      return Colors.red.hex()
    case 'purple':
      return Colors.purple.hex()
    case 'grey':
      return Colors.grey.c500.hex()
    default:
      return Colors.blue.hex()
  }
}
function getContent(type, content, size, color){
  var width=getWidth(size);
  switch(type) {
      case 'icon':
        return <Icon name={content} color={Colors.white.hex()} w={width.w} p={width.w*.11} />;
      case 'default-profile':
        return <Icon name={'profile-circle'} color={getColor(color)} w={width.w+width.p} />
      case 'image':
        return
      default:
        return content ;
  }
}
function randomImage(){
  var max = 500;
  var min = 100;
  var random = Math.floor(Math.random() * (max-min) + min)
  return 'http://placekitten.com/'+random+'/'+random
}

export default class Avatar extends React.Component {
  render(){
    return(
      <Ava size={this.props.size} w={getWidth(this.props.size).w} color={this.props.color} type={this.props.type} url={this.props.url? this.props.url : randomImage()} className={this.props.className}>
        <ContentContainer>
          <AvaText>{getContent(this.props.type, this.props.content, this.props.size, this.props.color)}</AvaText>
        </ContentContainer>
      </Ava>
    )
  }
}
