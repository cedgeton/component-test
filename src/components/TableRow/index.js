import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';
import Icon from '../../components/Icon';

const Item = styled.div`
  display: grid;
  grid-template-columns: ${props => props.icon? '36px' : 'min-content'} 1fr min-content;
  grid-gap: ${props => props.icon? '10px' : '0'};
  border-top: 1px solid #eaeaea;
  padding: 12px 26px 12px 26px;
  margin: 0 -26px;
  text-align: left;
  &:last-of-type{
    border-bottom: 1px solid #eaeaea;
  }
  .summary &{
    border: 0;
    margin: 0;
    padding: 16px 16px 0 12px;
  }
  .tableModule &{
    margin:0;
    padding: 14px 16px;
  }
`;
const ItemName = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${Colors.black.c800};
  line-height: 20px;
  margin-right: 5px;
  .summary &{
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: ${Colors.grey.c900};
  }
`;
const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const RowSubTitle = styled.span`
    .issue:not(.summary) &, .tableModule &{
      font-weight: 400;
      font-size: 12px;
      color: ${Colors.grey.c700};
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
    border: 2px solid ${Colors.grey.c400};
    border-radius: 100px;
    display: flex;
`;
const ItemIcon = styled(Icon)`
    display: flex;
    border: 3px solid ${Colors.grey.c400};
    display: inline-block;
`;
const Result = styled.span`
    font-weight: 500;
    font-size: 11px;
    color: ${Colors.yellow};
    text-transform: uppercase;
`;
const RightContent = styled.div`
    display: flex;
    align-items: center;
`;


function renderItemIcon(icon){
  if(icon === "suggestion"){
    return <SuggestionIcon />
  }else{
    return <ItemIcon name={icon} bg={"transparent"} color={Colors.black.c200} w={30} p={5} />
  }
}

export default class Issue extends React.Component {
  render(){
    return (
      <Item icon={this.props.icon} className="tableRow">
        <IconWrapper>{this.props.icon && renderItemIcon(this.props.icon)}</IconWrapper>
        <ItemContent>
          <ItemName>{this.props.title} {this.props.subtitle && <RowSubTitle>{this.props.subtitle}</RowSubTitle>}</ItemName>
          {!this.props.summary && this.props.line2 &&
            <Line2>{this.props.line2}</Line2>
          }
        </ItemContent>

        {this.props.result && <RightContent>
          <Result>{this.props.result}</Result>
        </RightContent>}
      </Item>
    )
  }
}
