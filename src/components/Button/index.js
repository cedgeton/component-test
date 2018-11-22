import React from 'react';
import styled  from 'styled-components';
import Colors  from '../../components/System';
import Icon  from '../../components/Icon';

const ButtonColors = {
  primary: {bg:Colors.blue, text:Colors.white},
  secondary: {bg:Colors.white, text:Colors.grey400},
  confirm: {bg:Colors.green, text:Colors.white},
  destroy: {bg:Colors.red, text:Colors.white},
  cancel: {bg:Colors.transparent, text:Colors.blue},
}


const ButtonWrapper = styled.button`
    background: ${props => ButtonColors[props.buttonStyle].bg.hsl().string()};
    box-shadow: ${props => props.buttonStyle != 'cancel' ? '0 0 1px 0 rgba(10,31,68,0.08), 1px 1px 1px 0 rgba(10,31,68,0.08)': ''};
    border-radius: 2px;
    outline: 0;
    cursor: pointer;
    font-weight: 500;
    font-size: ${props => props.size == 'small' ? '11px' : '13px'};
    color: ${props => ButtonColors[props.buttonStyle].text.hsl().string()};
    text-align: center;
    line-height: ${props => props.size == 'small' ? '16px' : '18px'};
    margin: 4px;
    padding: ${props => props.size == 'small' ? '2px 10px' : '5px 17px'};
    border: 0;
    ${props => props.outline && `
      background: transparent;
      color: ${ButtonColors[props.buttonStyle].bg.hsl().string()};
      border: 1px solid ${ButtonColors[props.buttonStyle].bg.hsl().string()};
    `}
    ${props => props.outline && props.buttonStyle == 'secondary' && `
      background: transparent;
      color: ${ButtonColors[props.buttonStyle].text.hsl().string()};
      border: 1px solid ${ButtonColors[props.buttonStyle].text.hsl().string()};
    `}
    &:hover{
      background: ${props => ButtonColors[props.buttonStyle].bg.hsl().darken(0.1).string()};
      color: ${props => props.buttonStyle === 'cancel' ? ButtonColors[props.buttonStyle].text.darken(0.4).hsl().string() : ''};
      ${props => props.outline && `
        background: ${ButtonColors[props.buttonStyle].bg.hsl().string()};
        color: ${ButtonColors[props.buttonStyle].text.hsl().string()};
        border: 1px solid ${ButtonColors[props.buttonStyle].bg.hsl().string()};
      `}
      ${props => props.outline && props.buttonStyle == 'secondary' && `
        background: ${ButtonColors[props.buttonStyle].text.hsl().string()};
        color: ${Colors['white'].hsl().string()};
        border: 1px solid ${ButtonColors[props.buttonStyle].text.hsl().string()};
      `};
    }
    &:disabled{
      background: transparent;
      color: ${props => Colors['grey400'].lighten(0.8).hsl().string()};
      cursor: not-allowed;
    }

`;


export default class Button extends React.Component {

  render(){
    return(
      <ButtonWrapper
        buttonStyle = {ButtonColors[this.props.style] != null ? this.props.style : 'primary'}
        disabled    = {this.props.disabled && 'disabled'}
        type        = {this.props.type}
        size        = {this.props.size}
        outline     = {this.props.outline}
      >
        {this.props.children}
      </ButtonWrapper>
    )
  }
}
