import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  background: ${props => props.bg || "transparent"};
  color: ${props => props.color || "#616871"};
  display: inline-block;
  font-size: 1.4em;
  line-height:1.4em;
  vertical-align: middle;
  border-radius: 100px;
  text-align:center;
`;

export default class Icon extends React.Component {
  render(){
    var type = this.props.name
    if(type === "medication"){
      type = "favorite";
    }else if (type === "lab"){
      type = "opacity";
    }else if (type === "checkin"){
      type = "chat";
    }
    return (
      <IconWrapper className={this.props.className} bg={this.props.bg} color={this.props.color}>
        <i className="material-icons">{type}</i>
      </IconWrapper>
    )
  }
}
