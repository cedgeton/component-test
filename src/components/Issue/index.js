import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import Tag from '../../components/Tag';
import Bull from '../Module/Bull.js';
import RiskStatus from '../../components/RiskStatus';
import PlanItem from './planItem.js';

const TitleSection = styled.div`
    background: transparent;
    span.summary & {
      padding: 16px;
      border-bottom: 1px solid #E1E4E9;
      border-radius: 2px 2px 0 0;
      background: #fff;
    }
`;
const Title = styled.span`
    font-weight: 500;
    display: inline-block;
    font-size: 20px;
    color: #616871;
    letter-spacing: 0.5px;
    line-height: 28px;
    margin-bottom:6px;
    span.summary & {
      color: #1F262D;
      line-height: 24px;
      font-size: 18px;
    }
`;
const IconClose = styled(Icon)`
    float:right;
`;
const Assessment = styled.span`
    font-weight: 400;
    font-size: 12px;
    color: #8C93A0;
    letter-spacing: 0;
    line-height: 24px;
    margin-bottom: 24px;
    display: block;

    span.summary & {
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
    color: #A7AFBC;
    text-align: center;
    line-height: 16px;
    margin-top: 21px;
`;
const Result = styled.div`
    font-weight: 400;
    font-size: 12px;
    color: #FCA200;
    text-transform: uppercase;
    display: flex;
    align-items: center;
`;
const Goals = styled.div`
    margin-bottom: 38px;
`;
const Goal = styled.div`
    font-weight: 400;
    font-size: 12px;
    color: #8C93A0;
    letter-spacing: 0;
    line-height: 16px;
`;
const TitleBull = styled(Bull)`
    margin-left: -15px;
    span.summary & {
      margin-left: 0;
    }
`;
const Notes = styled.div`
    background: #F8F9FB;
    font-weight: 400;
    font-size: 12px;
    color: #616871;
    line-height: 20px;
    padding:20px;
    margin-top: 60px;
`;
const NotesTitle = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: #616871;
    line-height: 24px;
`;

export default class Issue extends React.Component {
  render(){
    var issue = this.props.issue
    var items = issue.planItems
    var summary = this.props.summary
    return (
      <span className={summary? "issue summary" : "issue"}>
        <TitleSection>
          {!summary &&
            <IconClose name="close" color="#969EA8" w={18} />
          }
          <Title>
            {issue.favorite ? (<TitleBull>&bull;</TitleBull>):("")}
            {issue.title}
            <RiskStatus status={issue.status} />
          </Title>
          <Assessment>{issue.assessment ? issue.assessment : "No Assessment"}</Assessment>
        </TitleSection>
        {!summary && issue.goals &&
          <Goals>
            {issue.goals.map(function(goal, i){
              return(
                <Goal><Tag text="Goal" bg="green" />{goal}</Goal>
              )
            })}
          </Goals>
        }
        <span>
          {items.map(function(item, i){
            if (i<4 || !summary){
              return(
                <PlanItem item={item} summary={summary} />
              )
            }
            else{
              return
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
      </span>
    )
  }
}
