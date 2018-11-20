import React from 'react';
import styled from 'styled-components';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'


const StyledLivePreview = styled(LivePreview)`
  padding: 20px 20vw;
  border: 1px solid #E1E4E9;
  border-radius: 2px 2px 0 0;
  background: #F8F9FB;
  text-align: center;
`;
const StyledLiveEditor = styled(LiveEditor)`
  &.prism-code{
    padding: 20px;
    background: #fff;
    color: #454D54;
    border: 1px solid #E1E4E9;
    border-radius: 0 0 2px 2px;
    border-top: 0;
    margin-bottom: 40px;
    overflow: auto;
  }
  .token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.atrule, .token.attr-value, .token.keyword{
    color: #EC4068;
  }
  .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted{
    color: #00D3A7;
  }
`;


export default class CodeObj extends React.Component {
  render(){
    return (<LiveProvider code={this.props.code} scope={this.props.scope}>
      <LiveError />
      <StyledLivePreview />
      <StyledLiveEditor />
    </LiveProvider>
    )
  }
}
