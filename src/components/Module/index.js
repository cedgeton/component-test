import React from 'react';
import styled from 'styled-components';
import Icons from '../../components/Icon/icons.js';
import Icon from '../../components/Icon';
import PropTypes from 'prop-types';
import {Colors} from '../../components/System';
import Panel from './Panel.js';
import TagContent from './Tags.js';
import IssueContent from './Issues.js';
import TableContent from './Table.js';

const ModuleTitle = styled.span`
    font-weight: 500;
    font-size: 13px;
    color: ${Colors.grey.c700};
    letter-spacing: 0;
    line-height: 16px;
    text-transform: uppercase;
    display: block;
    padding: 16px 16px 14px;
`;
const ModuleContent = styled.span`
    display: block;
`;
const TitleIcon = styled(Icon)`
    float:right;
    text-align: center;
    margin: 10px 12px 0 0;
`;
const DefaultContent = styled.span`
    font-weight: 400;
    font-size: 12px;
    color: ${Colors.black.c400};
    line-height: 20px;
    padding: 0 16px 16px;
    display: block;
`;
const StyledPanel = styled(Panel)`
    text-align: left;
`;



class Module extends React.Component {
  render(){
    return (
      <StyledPanel>
        {this.props.category &&
          <TitleIcon name={this.props.category} bg={Colors.grey.c300} color={Colors.grey.c800} w={28} p={4} />
        }
        <ModuleTitle>
          {this.props.title}
        </ModuleTitle>
        <ModuleContent>
          {(this.props.type === "tag") ?(
            <TagContent tags={this.props.tags}  />
          ):(this.props.type === "table") ?(
            <TableContent rows={this.props.rows}  />
          ):(this.props.type === "issues") ?(
            <IssueContent issues={this.props.issues}  />
          ):(
            <DefaultContent>{this.props.content}</DefaultContent>
          )}
        </ModuleContent>
      </StyledPanel>
    )
  }
}
Module.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['basic', 'tag', 'table', 'issues']),
  category: PropTypes.oneOf(Object.keys(Icons)),
  content: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      bg: PropTypes.oneOf(['blue', 'green', 'yellow', 'red', 'grey'])
    })),
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      line2: PropTypes.string,
    })),
  issues: PropTypes.array
}
export default Module;
