import React from 'react';
import styled  from 'styled-components';
import PropTypes from 'prop-types';
import {Colors}  from '../../components/System';
import Color  from 'color';

const ButtonColors = {
  primary: {bg:Colors.blue, text:Colors.white},
  secondary: {bg:Colors.white, text:Colors.black.c400},
  confirm: {bg:Colors.green, text:Colors.white},
  destroy: {bg:Colors.red, text:Colors.white},
  cancel: {bg:'transparent', text:Colors.blue},
}


const ButtonWrapper = styled.button`
    background: ${props => props.outline ? 'transparent' : ButtonColors[props.buttonStyle].bg };
    box-shadow: ${props => props.buttonStyle !== 'cancel' ? '0 0 1px 0 rgba(10,31,68,0.08), 1px 1px 1px 0 rgba(10,31,68,0.08)': ''};
    border-radius: 2px;
    outline: 0;
    cursor: pointer;
    font-weight: 500;
    font-size: ${props => props.size === 'small' ? '11px' : '13px'};
    color: ${props => (props.outline && props.buttonStyle !== 'secondary') ? ButtonColors[props.buttonStyle].bg : ButtonColors[props.buttonStyle].text};
    text-align: center;
    line-height: ${props => props.size === 'small' ? '16px' : '18px'};
    margin: 4px;
    padding: ${props => props.size === 'small' ? '2px 10px' : '5px 17px'};
    box-sizing: border-box;
    border: 1px solid ${props =>
      {if(props.outline && props.buttonStyle === 'secondary' && props.buttonStyle !== 'cancel'){
          return ButtonColors[props.buttonStyle].text
        } else if(props.outline && props.buttonStyle !== 'cancel'){
          return ButtonColors[props.buttonStyle].bg
        } else{
          return 'transparent';
        }
      }
    };
    &:hover{
      background: ${props =>
        {if(props.outline && props.buttonStyle === 'secondary'){
            return ButtonColors[props.buttonStyle].text
          } else if(props.outline){
            return ButtonColors[props.buttonStyle].bg
          } else{
            return Color(ButtonColors[props.buttonStyle].bg).hsl().darken(0.1).string()
          }
        }
      };
      color: ${props =>
        {if(props.outline){
            return Colors.white
          } else if(props.buttonStyle === 'cancel'){
            return Color(ButtonColors[props.buttonStyle].text).darken(0.4).hsl().string()
          }
        }
      };

    }
    &:disabled{
      background: transparent;
      color: ${props => Color(Colors.black.c400).lighten(0.8).hsl().string()};
      cursor: not-allowed;
    }

`;


class Button extends React.Component {
  static defaultProps = {
    buttonStyle: 'primary',
    type: 'button',
    size: 'medium',
    outline: false,
    disabled: false
  }

  render(){
    return(
      <ButtonWrapper
        buttonStyle = {ButtonColors[this.props.buttonStyle] != null ? this.props.buttonStyle : Button.defaultProps.buttonStyle}
        disabled    = {this.props.disabled && 'disabled'}
        type        = {this.props.type}
        size        = {this.props.size}
        outline     = {this.props.outline}
        onClick     = {this.props.onClick}
      >
        {this.props.children}
      </ButtonWrapper>
    )
  }
}
Button.propTypes = {
  buttonStyle: PropTypes.oneOf(['primary','secondary','confirm','destroy','cancel']),
  type: PropTypes.oneOf(['button','submit']),
  size: PropTypes.oneOf(['small','medium']),
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default Button;
