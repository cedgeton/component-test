import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import Bull from '../Module/Bull.js';
import RiskStatus from '../../components/RiskStatus';

const IssueBox = styled.div`
  background: #F8F9FB;
  border: 1px solid #E1E4E9;
  box-shadow: 0 0 1px 0 rgba(10,31,68,0.08), 0 3px 4px 0 rgba(10,31,68,0.10);
  margin: 21px 18px;
  padding-bottom: 21px;
  border-radius: 2px;
  font-size: 14px;
`;
const TitleSection = styled.div`
  background: #FFFFFF;
  border-bottom: 1px solid #E1E4E9;
  border-radius: 2px 2px 0 0;
  padding: 16px;
`;
const Title = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: #1F262D;
  line-height: 24px;
  display: inline-block;
`;
const Assessment = styled.span`
  font-weight: 300;
  display: block;
  font-size: 12px;
  color: #7A838E;
  line-height: 18px;
  margin-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const Item = styled.div`
  padding: 16px 16px 0 12px;
  font-weight: 400;
  font-size: 12px;
  color: #8C93A0;
  line-height: 16px;
  display: grid;
  grid-template-columns: 36px 1fr min-content;
  grid-gap: 10px;
`;
const ItemName = styled.div`
  display: inline-block;
  display: flex;
  align-items: center;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const SuggestionIcon = styled.span`
  display: inline-block;
  width: 11px;
  height: 11px;
  border: 2px solid #E1E4E9;
  border-radius: 100px;
  display: flex;
`;
const ItemIcon = styled(Icon)`
    display: flex;
    border: 3px solid #E1E4E9;
    display: inline-block;
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
function renderItemIcon(item){
  var icon = item.type;
  if (icon === "suggestion"){
    return <SuggestionIcon />
  }else{
    return <ItemIcon name={icon} bg={"transparent"} color={"#969EA8"} w={30} p={5} />
  }
}

export default class Issue extends React.Component {
  render(){
    var issueID = this.props.issueID;
    var issue = this.props.issue
    var items = issue.planItems
    return (
      <IssueBox id={issueID != null ? "issue"+issueID : ""}>
        <TitleSection>
          <Title>
            {issue.favorite ? (<Bull>&bull;</Bull>):("")}
            {issue.title}
            <RiskStatus status={issue.status} />
          </Title>
          <Assessment>{issue.assessment ? issue.assessment : "No Assessment"}</Assessment>
        </TitleSection>
        {items.map(function(item, i){
          if (i<4){
            return(
              <Item>
                <IconWrapper>{renderItemIcon(item)}</IconWrapper>
                <ItemName>{item.name}</ItemName>
                {item.result && <Result>{item.result}</Result>}
              </Item>
            )
          }
          else{
            return
          }
        })}
        {items.length > 4 &&
          <More>{items.length-4} more...</More>
        }
      </IssueBox>
    )
  }
}
