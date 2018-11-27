import React from 'react';
import styled from 'styled-components';
import Tag from '../../components/Tag';

const TagWrapper = styled.section`
  padding: 0 16px 16px;
`;

export default class TagContent extends React.Component {
  render(){
    var tags = this.props.tags;
    return (
      <TagWrapper>
        {tags.map(function(tag, i){
           return <Tag text={tag.text} bg={tag.bg} big />
        })}
      </TagWrapper>
    )
  }
}
