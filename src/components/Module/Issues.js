import React from 'react';
import styled from 'styled-components';
import {Colors} from '../../components/System';
import Issue from '../../components/Issue';
import Bull from '../Module/Bull.js';
import Tag from '../../components/Tag';
import RiskStatus from '../../components/RiskStatus';

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
const RiskTag = styled(Tag)`
  padding: 0px 4px;
  line-height: 15px;
  margin-left: 6px;
  border-radius: 2px;
`;
const IssueBox = styled.div`
  background: ${Colors.grey.c200};
  border: 1px solid ${Colors.grey.c400};
  box-shadow: 0 0 1px 0 rgba(10,31,68,0.08), 0 3px 4px 0 rgba(10,31,68,0.10);
  margin: 21px 18px;
  padding-bottom: 21px;
  border-radius: 2px;
  font-size: 14px;
`;

function renderJumpLinks(issues){
  return(
    <JumpLinks>
      {issues.map(function(issue, i){
        return (
          <li>
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
        issues.map(function(issue, i){
           return(
            <Issue id={"issue"+i} issue={issue} summary />
          )
        })
    ])
  }
}
