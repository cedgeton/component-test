import React from 'react';
import styled  from 'styled-components';
import {Colors}  from '../../components/System';
import Icon  from '../../components/Icon';

const ButtonColors = {
  primary: {bg:Colors.blue, text:Colors.white},
  secondary: {bg:Colors.white, text:Colors.black.c400},
  confirm: {bg:Colors.green, text:Colors.white},
  destroy: {bg:Colors.red, text:Colors.white},
  cancel: {bg:Colors.transparent, text:Colors.blue},
}


const ButtonWrapper = styled.button`
    background: ${props => props.outline ? 'transparent' : ButtonColors[props.buttonStyle].bg.hsl().string() };
    box-shadow: ${props => props.buttonStyle != 'cancel' ? '0 0 1px 0 rgba(10,31,68,0.08), 1px 1px 1px 0 rgba(10,31,68,0.08)': ''};
    border-radius: 2px;
    outline: 0;
    cursor: pointer;
    font-weight: 500;
    font-size: ${props => props.size == 'small' ? '11px' : '13px'};
    color: ${props => (props.outline && props.buttonStyle != 'secondary') ? ButtonColors[props.buttonStyle].bg.hex() : ButtonColors[props.buttonStyle].text.hex()};
    text-align: center;
    line-height: ${props => props.size == 'small' ? '16px' : '18px'};
    margin: 4px;
    padding: ${props => props.size == 'small' ? '2px 10px' : '5px 17px'};
    box-sizing: border-box;
    border: 1px solid ${props =>
      {if(props.outline && props.buttonStyle === 'secondary' && props.buttonStyle != 'cancel'){
          return ButtonColors[props.buttonStyle].text.hex()
        } else if(props.outline && props.buttonStyle != 'cancel'){
          return ButtonColors[props.buttonStyle].bg.hex()
        } else{
          return 'transparent';
        }
      }
    };
    &:hover{
      background: ${props =>
        {if(props.outline && props.buttonStyle === 'secondary'){
            return ButtonColors[props.buttonStyle].text.hex()
          } else if(props.outline){
            return ButtonColors[props.buttonStyle].bg.hex()
          } else{
            return ButtonColors[props.buttonStyle].bg.hsl().darken(0.1).string()
          }
        }
      };
      color: ${props =>
        {if(props.outline){
            return Colors.white.hex()
          } else if(props.buttonStyle === 'cancel'){
            return ButtonColors[props.buttonStyle].text.darken(0.4).hsl().string()
          }
        }
      };

    }
    &:disabled{
      background: transparent;
      color: ${props => Colors.black.c400.lighten(0.8).hsl().string()};
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