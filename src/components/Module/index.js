import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import Box from './Box.js';
import TagContent from './Tags.js';
import IssueContent from './Issues.js';
import TableContent from '../../components/TableRows';

const ModuleTitle = styled.span`
    font-weight: 500;
    font-size: 13px;
    color: #A7AFBC;
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
    color: #616871;
    line-height: 20px;
    padding: 0 16px 16px;
    display: block;
`;



export default class TagModule extends React.Component {
  render(){
    return (
      <Box>
        {this.props.category &&
          <TitleIcon name={this.props.category} bg={"#F1F2F5"} color={"#9CA4B1"} w={28} p={4} />
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
      </Box>
    )
  }
}
