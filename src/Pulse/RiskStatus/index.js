import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Tag} from '../../Pulse/';

const RiskTag = styled(Tag)`
  padding: 0px 4px;
  line-height: 15px;
  margin: 0 0 2px 6px;
  vertical-align: text-bottom;
  border-radius: 2px;
`;

class RiskStatus extends React.Component {
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
RiskStatus.propTypes = {
  status: PropTypes.oneOf(['moderate','high']),
}
export default RiskStatus
