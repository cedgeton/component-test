import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Colors,Text,Caps, Icon, Panel} from '../../Pulse/';
import TagContent from './Tags.js';
import IssueContent from './Issues.js';
import TableContent from './Table.js';
import Icons from '../../Pulse/Icon/icons.js';

const ModuleTitle = styled.span`
    padding: 16px 16px 14px;
    display: block;
`;
const ModuleContent = styled.span`
    display: block;
`;
const TitleIcon = styled(Icon)`
    float:right;
    text-align: center;
    margin: 10px 12px 0 0;
`;
const DefaultContent = styled.div`
    padding: 0 16px 16px;
`;



class Module extends React.Component{
  render(){
    return (
      <Panel>
        {this.props.category &&
          <TitleIcon name={this.props.category} bg={Colors.grey.c300} color={Colors.grey.c800} w={28} p={4} />
        }
        <ModuleTitle>
          <Caps size='large' color='nonessential'>{this.props.title}</Caps>
        </ModuleTitle>
        <ModuleContent>
          {(this.props.type === "tag") ?(
            <TagContent tags={this.props.tags}  />
          ):(this.props.type === "table") ?(
            <TableContent rows={this.props.rows}  />
          ):(this.props.type === "issues") ?(
            <IssueContent issues={this.props.issues}  />
          ):(
            <DefaultContent>
              <Text>{this.props.content}</Text>
            </DefaultContent>
          )}
        </ModuleContent>
      </Panel>
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
