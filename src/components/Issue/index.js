import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import {Colors, Header, Text} from '../../components/System';
import Icon from '../../components/Icon';
import Tag from '../../components/Tag';
import Bull from '../Module/Bull.js';
import RiskStatus from '../../components/RiskStatus';
import TableRow from '../../components/TableRow';

const TitleSection = styled.div`
    background: transparent;
    margin-bottom: 24px;
    .summary & {
      padding: 16px 16px 21px;
      border-bottom: 1px solid ${Colors.grey.c400};
      border-radius: 2px 2px 0 0;
      background: #fff;
      margin:0;
    }
`;
const Title = styled(Header)`
    display: inline-block;
    margin-bottom: 6px;
`;
const IconClose = styled(Icon)`
    float:right;
`;
const More = styled.div`
    margin-top: 21px;
    text-align: center;
`;
const Goals = styled.div`
    margin-bottom: 38px;
`;
const TitleBull = styled(Bull)`
    margin-left: -15px;
    .summary & {
      margin-left: 0;
    }
`;
const Notes = styled.div`
    background: ${Colors.grey.c200};
    padding:20px;
    margin-top: 60px;
`;
const IssueHolder = styled.div`
  text-align: left;
  background: #fff;
  &.summary{
    background: ${Colors.grey.c200};
    border: 1px solid ${Colors.grey.c400};
    box-shadow: 0 0 1px 0 rgba(10,31,68,0.08), 0 3px 4px 0 rgba(10,31,68,0.10);
    margin: 21px 18px;
    padding-bottom: 21px;
    border-radius: 2px;
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
          <Title size={summary ? 'component' : 'page' }>
            {issue.favorite ? (<TitleBull>&bull;</TitleBull>):("")}
            {issue.title}
            <RiskStatus status={issue.status} />
          </Title>
          <Text
            numLines={summary ? 4 : null}
            color={'subtle'}
            spacing={summary ? 'default' : 'loose'}
          >
            {issue.assessment ? issue.assessment : "No Assessment"}
          </Text>
        </TitleSection>
        {!summary && issue.goals &&
          <Goals>
            {_.map(issue.goals, function(goal, i){
              return(
                <Text key={i}><Tag text="Goal" bg="green" />{goal}</Text>
              )
            })}
          </Goals>
        }
        <div>
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
        </div>
        {items.length > 4 && summary &&
          <More>
            <Text color='nonessential' spacing='tight'>{items.length-4} more...</Text>
          </More>
        }

        {!summary && issue.notes &&
          <Notes>
            <Text size='title' color='contrast' bottom='small'>Issue Notes</Text>
            <Text>{issue.notes}</Text>
          </Notes>
        }
      </IssueHolder>
    )
  }
}
