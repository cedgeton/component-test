import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import {Colors, Header} from '../../components/System';
import Icon from '../../components/Icon';
import Tag from '../../components/Tag';
import Bull from '../Module/Bull.js';
import RiskStatus from '../../components/RiskStatus';
import TableRow from '../../components/TableRow';

const TitleSection = styled.div`
    background: transparent;
    .summary & {
      padding: 16px;
      border-bottom: 1px solid ${Colors.grey.c400};
      border-radius: 2px 2px 0 0;
      background: #fff;
    }
`;
const Title = styled(Header)`
    display: inline-block;
    margin-bottom: 6px;
`;
const IconClose = styled(Icon)`
    float:right;
`;
const Assessment = styled.span`
    font-weight: 400;
    font-size: 12px;
    color: ${Colors.grey.c900};
    letter-spacing: 0;
    line-height: 24px;
    margin-bottom: 24px;
    display: block;

    .summary & {
      font-weight: 300;
      color: #7A838E;
      line-height: 18px;
      margin: 0 0 8px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
`;
const More = styled.div`
    font-weight: 400;
    font-size: 12px;
    color: ${Colors.grey.c600};
    text-align: center;
    line-height: 16px;
    margin-top: 21px;
`;
const Goals = styled.div`
    margin-bottom: 38px;
`;
const Goal = styled.div`
    font-weight: 400;
    font-size: 12px;
    color: ${Colors.grey.c900};
    letter-spacing: 0;
    line-height: 16px;
`;
const TitleBull = styled(Bull)`
    margin-left: -15px;
    .summary & {
      margin-left: 0;
    }
`;
const Notes = styled.div`
    background: ${Colors.grey.c200};
    font-weight: 400;
    font-size: 12px;
    color: ${Colors.black.c400};
    line-height: 20px;
    padding:20px;
    margin-top: 60px;
`;
const NotesTitle = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: ${Colors.black.c400};
    line-height: 24px;
`;
const IssueHolder = styled.div`
  text-align: left;
  background: #fff;
  &.summary{
    text-align: left;
    background: ${Colors.grey.c200};
    border: 1px solid ${Colors.grey.c400};
    box-shadow: 0 0 1px 0 rgba(10,31,68,0.08), 0 3px 4px 0 rgba(10,31,68,0.10);
    margin: 21px 18px;
    padding-bottom: 21px;
    border-radius: 2px;
    font-size: 14px;
  }
`;

export default class Issue extends React.Component {
  render(){
    var issue = this.props.issue
    var items = issue.planItems
    var summary = this.props.summary
    return (
      <IssueHolder className={summary? "issue summary" : "issue"} id={this.props.id}>
        <TitleSection>
          {!summary &&
            <IconClose name="close" color={Colors.black.c200} w={18} />
          }
          <Title level={summary ? 2 : 1 }>
            {issue.favorite ? (<TitleBull>&bull;</TitleBull>):("")}
            {issue.title}
            <RiskStatus status={issue.status} />
          </Title>
          <Assessment>{issue.assessment ? issue.assessment : "No Assessment"}</Assessment>
        </TitleSection>
        {!summary && issue.goals &&
          <Goals>
            {_.map(issue.goals, function(goal, i){
              return(
                <Goal key={i}><Tag text="Goal" bg="green" />{goal}</Goal>
              )
            })}
          </Goals>
        }
        <span>
          {_.map(items, function(item, i){
            if (i<4 || !summary){
              return(
                <TableRow
                  title={item.name}
                  subtitle={item.dosage}
                  line2={item.instructions}
                  icon={item.type}
                  result={item.result}
                  summary={summary}
                  key={i}
                />
              )
            }
            else{
              return null
            }
          })}
        </span>
        {items.length > 4 && summary &&
          <More>{items.length-4} more...</More>
        }

        {!summary && issue.notes &&
          <Notes>
            <NotesTitle>Issue Notes</NotesTitle>
            {issue.notes}
          </Notes>
        }
      </IssueHolder>
    )
  }
}
