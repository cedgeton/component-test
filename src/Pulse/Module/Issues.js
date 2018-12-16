import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import {Colors, Issue} from '../../Pulse/';
import Bull from '../Module/Bull.js';
import RiskStatus from '../../Pulse/RiskStatus';

const JumpLinks = styled.ul`
  line-height: 26px;
  padding: 0 18px;
  margin: 0 0 40px;
  column-count: 2;
  column-gap: 20px;
  width: 100%;
  list-style-type: none;
`;
const Link = styled.a`
  font-weight: 400;
  font-size: 12px;
  color: ${Colors.blue};
  &:hover{
    color: ${Colors.blue};
  }
`;

function renderJumpLinks(issues){
  return(
    <JumpLinks>
      {_.map(issues, function(issue, i){
        return (
          <li key={i}>
            {issue.favorite ? (<Bull>&bull;</Bull>):("")}
            <Link href={"#issue"+i}>{issue.title}</Link>
            <RiskStatus status={issue.status} />
          </li>
        )
      })}
    </JumpLinks>
  )
}

export default class IssueContent extends React.Component {
  render(){
    var issues = this.props.issues;
    return ([
        renderJumpLinks(issues),
        _.map(issues, function(issue, i){
           return(
            <Issue id={"issue"+i} issue={issue} summary key={i} />
          )
        })
    ])
  }
}
