import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Colors}  from '../../Pulse/';


function getCheckShape(checked, color){
  if(checked){
    return `url('data:image/svg+xml;utf8,<svg width="16px" height="16px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Icon-/-Check-on" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M16,0 L2,0 C0.895,0 0,0.895 0,2 L0,16 C0,17.1049995 0.895,18 2,18 L16,18 C17.105,18 18,17.1049995 18,16 L18,2 C18,0.895 17.105,0 16,0 Z M7,14 L2,9 L3.415,7.585 L7,11.17 L14.585,3.585 L16,5 L7,14 Z" id="Fill-1" fill="${color}"></path>
        </g>
    </svg>')`
  }else{
    return `url('data:image/svg+xml;utf8,<svg width="16px" height="16px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Icon-/-Check-off" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M16,2 L16,16 L2,16 L2,2 L16,2 Z M16,0 L2,0 C0.895,0 0,0.895 0,2 L0,16 C0,17.1049995 0.895,18 2,18 L16,18 C17.105,18 18,17.1049995 18,16 L18,2 C18,0.895 17.105,0 16,0 Z" id="Fill-1" fill="${color}"></path>
        </g>
    </svg>')`
  }
}
function getRadioShape(checked, color){
  if(checked){
    return `url('data:image/svg+xml;utf8,<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Icon-/-Radio-on" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M9,4.5 C6.516,4.5 4.5,6.516 4.5,9 C4.5,11.484 6.516,13.5 9,13.5 C11.484,13.5 13.5,11.484 13.5,9 C13.5,6.516 11.484,4.5 9,4.5 Z M9,0 C4.0275,0 0,4.0275 0,9 C0,13.9725 4.0275,18 9,18 C13.9725,18 18,13.9725 18,9 C18,4.0275 13.9725,0 9,0 Z M9,16.2 C5.022,16.2 1.8,12.978 1.8,9 C1.8,5.022 5.022,1.8 9,1.8 C12.978,1.8 16.2,5.022 16.2,9 C16.2,12.978 12.978,16.2 9,16.2 Z" id="Fill-1" fill="${color}"></path>
        </g>
    </svg>')`
  }else{
    return `url('data:image/svg+xml;utf8,<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Icon-/-Radio-off" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M9,0 C4.0275,0 0,4.0275 0,9 C0,13.9725 4.0275,18 9,18 C13.9725,18 18,13.9725 18,9 C18,4.0275 13.9725,0 9,0 Z M9,16.2 C5.022,16.2 1.8,12.978 1.8,9 C1.8,5.022 5.022,1.8 9,1.8 C12.978,1.8 16.2,5.022 16.2,9 C16.2,12.978 12.978,16.2 9,16.2 Z" id="Fill-1" fill="${color}"></path>
        </g>
    </svg>')`
  }
}
function getUniqueID(string, after){
  var after = after? after : '_'
  return _.uniqueId(string.replace(/\s/g, '-')+after)
}

const Group = styled.div`
  display: block;
  text-align: left;
  &.horizontal-label{
    display:grid;
    grid-template-columns: min-content 1fr;
    grid-gap: 20px;
    grid-auto-rows: auto;
    grid-template-areas: "label input";
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 11px;
  color: ${Colors.grey.c700};
  letter-spacing: 0;
  line-height: 18px;
  margin-bottom: 5px;
  display: inline-block;
  cursor: ${props => props.disabled? 'not-allowed' : 'pointer'};
  white-space: nowrap;
  vertical-align: middle;
  .horizontal-label &{
    grid-area: label;
    margin:0;
    display: flex;
    grid-row: span 1;
  }
  .horizontal-label input[type=checkbox] + &{
    color: transparent;
  }
  input[type=checkbox] ~ &, input[type=radio] ~ &{
    color: ${Colors.black.c400};
  }
  .horizontal-label .textarea-holder &{
    align-items: normal;
    padding-top: 7px;
  }
`;
const CheckLabel = styled.label`
  grid-area: input;
  grid-row: span 1;
  font-weight: 500;
  font-size: 11px;
  color: ${Colors.grey.c700};
  letter-spacing: 0;
  line-height: 16px;
  cursor: pointer;
  line-height: 18px;
  display: inline-block;
  float: left;
  .toggle &{
    width: 50px;
    height: 24px;
  	background: ${Colors.grey.c400};
  	text-indent: -9999px;
  	border-radius: 100px;
  	position: relative;
    display:block;
    float: none;
  }
  .toggle input[type=checkbox]:checked + &{
  	background: ${Colors.green};
  }
`;
const StyledCheckbox = styled.input`
  display:none;

  .horizontal-label &{
    align-items: center;
    grid-row: span 1;
  }
  & + ${CheckLabel}::before{
    content:"";
    display:inline-block;
    width:24px;
    height:18px;
    background:${props => props.type === 'radio' ? getRadioShape(false, Colors.grey.c500) : getCheckShape(false, Colors.grey.c500)} no-repeat;
    background-position: left center;
    vertical-align: top;
  }
  .toggle &{
    display: initial;
    height: 0;
  	width: 0;
  	visibility: hidden;
    position: absolute;
  }
  .toggle & + ${CheckLabel}::before{
    content: '';
  	position: absolute;
  	top: 2px;
  	left: 2px;
  	width: 20px;
  	height: 20px;
  	background: #fff;
  	border-radius: 90px;
  	transition: 0.3s;
    box-shadow: 1px 1px 1px rgba(0,0,0,.1)
  }
  &:checked + ${CheckLabel}::before{
    background:${props => props.type === 'radio' ? getRadioShape(true, Colors.blue) : getCheckShape(true, Colors.blue)} no-repeat;
    background-position: left center;
    vertical-align: top;
  }
  .toggle &:checked + ${CheckLabel}::before{
    left: calc(100% - 2px);
  	transform: translateX(-100%);
    background: #fff;
  }
  &:checked:disabled + ${CheckLabel}::before{
    background-image: ${props => props.type === 'radio' ? getRadioShape(true, Colors.grey.c300) : getCheckShape(true, Colors.grey.c300)};
  }
  &:disabled + ${CheckLabel}::before{
    background-image: ${props => props.type === 'radio' ? getRadioShape(false, Colors.grey.c300) : getCheckShape(false, Colors.grey.c300)};
  }
`;

const GroupLabel = styled(Label)`
  grid-area: label;
  grid-row: span 1;
  display: block;
  cursor: default;
`;
const CheckWrap = styled.span`
  display: inline-block;
  margin-right: 20px;
  .horizontal-label &{
    display: block;
    margin-bottom: 3px;
  }
`;
const Checks = styled.div`
  grid-area: input;
  grid-row: span 1;
`;

const StyledInput = styled.input`
  border: 1px solid ${Colors.grey.c400};
  box-shadow: inset 2px 2px 1px 0 rgba(0,0,0,0.08);
  border-radius: 2px;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  padding: 6px 12px;
  outline: 0;
  color: ${Colors.black.c800};
  width: 100%;
  box-sizing: border-box;
  grid-area: input;
  &::placeholder{
    color: ${Colors.grey.c500};
  }
  &:focus{
    border: 1px solid ${Colors.blue};
  }
  &:disabled{
    background: ${Colors.grey.c200};
    cursor: not-allowed;
  }
  .horizontal-label &{
    display: flex;
    align-items: center;
    grid-row: span 1;
  }
`;
const StyledTextarea = styled.textarea`
  border: 1px solid ${Colors.grey.c400};
  box-shadow: inset 2px 2px 1px 0 rgba(0,0,0,0.08);
  border-radius: 2px;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  padding: 6px 12px;
  outline: 0;
  color: ${Colors.black.c800};
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  grid-area: input;
  resize: none;
  &::placeholder{
    color: ${Colors.grey.c500};
  }
  &:focus{
    border: 1px solid ${Colors.blue};
  }
  &:disabled{
    background: ${Colors.grey.c200};
    cursor: not-allowed;
  }
  .horizontal-label &{
    display: flex;
    align-items: center;
    grid-row: span 1;
  }
`;

const InputHolder = styled.div`
  margin: 0 0 10px;
  text-align: left;
  .horizontal-label &{
    display:contents;
  }
`;

export class InputGroup extends React.Component {
  static defaultProps = {
    layout: 'vertical',
  }

  render(){
    return(
      <Group className={this.props.layout === 'horizontal' ? 'horizontal-label' : ''} >
        {this.props.children}
      </Group>
    )
  }
}
InputGroup.propTypes = {
  layout: PropTypes.oneOf(['horizontal','vertical']),
}


export class Checkbox extends React.Component {
  static defaultProps = {
    checked: false,
    disabled: false,
    required: false,
  }

  render(){
    var uniqueID = this.props.id? this.props.id : getUniqueID(this.props.label);
    return(
      <InputHolder className={this.props.toggle ? 'toggle' : ''}>
        <Label htmlFor={uniqueID} disabled={this.props.disabled}>{this.props.label}</Label>
        <StyledCheckbox
          defaultChecked = {this.props.checked}
          disabled={this.props.disabled}
          required={this.props.required}
          value={this.props.value}
          id={uniqueID}
          name={uniqueID}
          type='checkbox'
        />
        <CheckLabel htmlFor={uniqueID} />
      </InputHolder>
    )
  }
}
Checkbox.propTypes = {
  label: PropTypes.string,
  groupLabel: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  toggle: PropTypes.bool
}

export class CheckGroup extends React.Component {
  static defaultProps = {
    type: 'checkbox'
  }

  render(){
    var type = this.props.type;
    var label = this.props.label;
    var uniqueName = getUniqueID(label, '_name_')
    return(
      <InputHolder>
        <GroupLabel>{label}</GroupLabel>
        <Checks>
          {_.map(this.props.checks, function(check, i){
            var uniqueID = check.id? check.id : getUniqueID(check.label);
            return(
              <CheckWrap>
                <StyledCheckbox
                  defaultChecked = {check.checked}
                  disabled={check.disabled}
                  required={check.required}
                  value={check.value}
                  id={uniqueID}
                  name={type === 'radio' ? uniqueName : uniqueID}
                  type= {type}
                />
                <CheckLabel htmlFor={uniqueID} />
                <Label htmlFor={uniqueID} disabled={check.disabled}>{check.label}</Label>
              </CheckWrap>
            )
          })}
        </Checks>
      </InputHolder>
    )
  }
}
CheckGroup.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['radio', 'checkbox']),
  checks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      id: PropTypes.string,
      checked: PropTypes.bool,
      disabled: PropTypes.bool,
      required: PropTypes.bool,
    })
  )
}

export class Input extends React.Component {
  static defaultProps = {
    type: 'text',
    disabled: false,
    required: false,
  }

  render(){
    var uniqueID = this.props.id? this.props.id : getUniqueID(this.props.label)
    return(
      <InputHolder>
        <Label htmlFor={uniqueID}>{this.props.label}</Label>
        <StyledInput
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          max={this.props.max}
          min={this.props.min}
          step={this.props.step}
          disabled={this.props.disabled}
          required={this.props.required}
          id={uniqueID}
          name={uniqueID} />
      </InputHolder>
    )
  }
}
Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'date', 'time', 'email', 'password', 'url', 'tel', 'range', 'file']),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  placeholder: PropTypes.string,
}


export class Textarea extends React.Component {
  static defaultProps = {
    disabled: false,
    required: false,
  }

  render(){
    var uniqueID = this.props.id? this.props.id : getUniqueID(this.props.label)
    return(
      <InputHolder className='textarea-holder'>
        <Label htmlFor={uniqueID}>{this.props.label}</Label>
        <StyledTextarea
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          max={this.props.max}
          min={this.props.min}
          step={this.props.step}
          disabled={this.props.disabled}
          required={this.props.required}
          id={uniqueID}
          name={uniqueID} />
      </InputHolder>
    )
  }
}
Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
}
