import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'


const StyledLivePreview = styled(LivePreview)`
  padding: 20px 30%;
  border: 1px solid ${Colors.grey.c400};
  border-radius: 2px 2px 0 0;
  background: ${Colors.grey.c200};
  text-align: center;
`;
const StyledLiveEditor = styled(LiveEditor)`
  &.prism-code{
    padding: 20px;
    background: #fff;
    color: ${Colors.black.c600};
    border: 1px solid ${Colors.grey.c400};
    border-radius: 0 0 2px 2px;
    border-top: 0;
    margin-bottom: 40px;
    overflow: auto;
  }
  .token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.atrule, .token.attr-value, .token.keyword{
    color: ${Colors.red};
  }
  .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted{
    color: #00D3A7;
  }
`;
const StyledLiveError = styled(LiveError)`
  padding: 10px 10px 10px 0;
  font-size: 12px;
  color: ${Colors.red};
`;

export default class CodeObj extends React.Component {
  render(){
    return (<LiveProvider code={this.props.code} scope={this.props.scope}>
      <StyledLiveError />
      <StyledLivePreview />
      <StyledLiveEditor />
    </LiveProvider>
    )
  }
}
