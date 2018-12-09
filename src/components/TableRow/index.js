import React from 'react';
import styled from 'styled-components';
import {Colors, Text, Caps}  from '../../components/System';
import PropTypes from 'prop-types';
import icons from '../../components/Icon/icons.js';
import Icon from '../../components/Icon';

const Item = styled.div`
  display: grid;
  grid-template-columns: ${props => props.icon? '36px' : 'min-content'} 1fr min-content;
  grid-gap: ${props => props.icon? '10px' : '0'};
  border-top: 1px solid #eaeaea;
  padding: 18px 32px;
  margin: 0 -32px;
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
  span {
    display: inline-block;
    margin-right: 5px
  }
`;
const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    margin-top: 3px;
`;
const ItemIcon = styled(Icon)`
    display: flex;
    border: 3px solid ${Colors.grey.c400};
    display: inline-block;
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

class TableRow extends React.Component {
  static defaultProps = {
    summary: false,
  }

  render(){
    return (
      <Item icon={this.props.icon} className="tableRow">
        <IconWrapper>{this.props.icon && renderItemIcon(this.props.icon)}</IconWrapper>
        <ItemContent>
          <ItemName>
            <Text size={this.props.summary ? 'default' : 'title'} color={this.props.summary ? 'subtle' : 'contrast'}>{this.props.title}</Text>
            {this.props.subtitle && <Text color={this.props.summary ? 'subtle' : 'nonessential'}>{this.props.subtitle}</Text>}
          </ItemName>
          {!this.props.summary && this.props.line2 &&
            <Text color='nonessential'>{this.props.line2}</Text>
          }
        </ItemContent>

        {this.props.result && <RightContent>
          <Caps color='warning'>{this.props.result}</Caps>
        </RightContent>}
      </Item>
    )
  }
}
var iconKeys = Object.keys(icons)
iconKeys.push('suggestion')
TableRow.propTypes = {
  icon: PropTypes.oneOf(iconKeys),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  line2: PropTypes.string,
  summary: PropTypes.bool,
  result: PropTypes.string,
}

export default TableRow
