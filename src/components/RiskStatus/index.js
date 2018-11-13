import React from 'react';
import styled from 'styled-components';
import Tag from '../../components/Tag';

const RiskTag = styled(Tag)`
  padding: 0px 4px;
  line-height: 15px;
  margin: 0 0 2px 6px;
  vertical-align: text-bottom;
  border-radius: 2px;
`;

export default class RiskStatus extends React.Component {
  render(){
    if(this.props.status === "moderate"){
      return <RiskTag text="Medium" bg="grey" className={this.props.className} />
    }else if(this.props.status === "high"){
      return <RiskTag text="High" bg="red" className={this.props.className} />
    }else{
      return null
    }
  }
}
