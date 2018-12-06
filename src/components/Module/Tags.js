import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Tag from '../../components/Tag';

const TagWrapper = styled.section`
  padding: 0 16px 16px;
`;

class TagContent extends React.Component {
  render(){
    var tags = this.props.tags;
    return (
      <TagWrapper>
        {_.map(tags, function(tag, i){
           return <Tag text={tag.text} bg={tag.bg} size="large" key={i} />
        })}
      </TagWrapper>
    )
  }
}

TagContent.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      bg: PropTypes.oneOf(['blue', 'green', 'yellow', 'red', 'grey'])
    })
  )
}

export default TagContent;
