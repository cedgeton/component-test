import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import Bull from '../Module/Bull.js';
import RiskStatus from '../../components/RiskStatus';

const Item = styled.div`
  display: grid;
  grid-template-columns: 36px 1fr min-content;
  grid-gap: 10px;
  border-bottom: 1px solid #eaeaea;
  padding: 12px 26px 12px 26px;
  margin: 0 -26px;
  &:first-of-type{
    border-top: 1px solid #eaeaea;
  }
  .summary &{
    border: 0;
    margin: 0;
    padding: 16px 16px 0 12px;
  }
`;
const ItemName = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #1F262D;
  line-height: 16px;
  .summary &{
    font-weight: 400;
    color: #8C93A0;
  }
`;
const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const RowSubTitle = styled.span`
    .issue:not(.summary) &{
      font-weight: 400;
      font-size: 11px;
      color: #A7AFBC;
      line-height: 16px;
    }
`;
const Line2 = styled(RowSubTitle)`
    margin-top:3px;
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
const Result = styled.span`
    font-weight: 500;
    font-size: 11px;
    color: #FCA200;
    text-transform: uppercase;
`;
const RightContent = styled.div`
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
    var item = this.props.item
    return (
      <Item>
        <IconWrapper>{renderItemIcon(item)}</IconWrapper>
        <ItemContent>
          <ItemName>{item.name} {item.dosage && <RowSubTitle>{item.dosage}</RowSubTitle>}</ItemName>
          {!this.props.summary && item.instructions &&
            <Line2>{item.instructions}</Line2>
          }
        </ItemContent>

        {item.result && <RightContent>
          <Result>{item.result}</Result>
        </RightContent>}
      </Item>
    )
  }
}
