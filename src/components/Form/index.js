import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';
import _ from 'lodash';


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

const Group = styled.div`
  display: block;
  text-align: left;
  width: ${props => props.w};
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
  line-height: 16px;
  margin-bottom: 5px;
  display: inline-block;
  cursor: ${props => props.disabled? 'not-allowed' : 'pointer'};
  white-space: nowrap;
  .horizontal-label &{
    grid-area: label;
    margin:0;
    display: flex;
    align-items: center;
    grid-row: span 1;
  }
  .horizontal-label .textarea-holder &{
    align-items: normal;
    padding-top: 7px;
  }
`;
const LabelWrapper = styled.span`
  line-height: 18px;
  display:block;
  &::before {
    content:"";
    display:inline-block;
    width:24px;
    height:18px;
  }
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display:none;

  .horizontal-label &{
    align-items: center;
    grid-row: span 1;
  }
  & + ${LabelWrapper}::before{
    background:${getCheckShape(false, Colors.grey.c500)} no-repeat;
    background-position: left center;
    vertical-align: top;
  }
  &:checked + ${LabelWrapper}::before{
    background:${getCheckShape(true, Colors.blue)} no-repeat;
    background-position: left center;
    vertical-align: top;
  }
  &:checked:disabled + ${LabelWrapper}::before{
    background-image: ${getCheckShape(true, Colors.grey.c300)};
  }
  &:disabled + ${LabelWrapper}::before{
    background-image: ${getCheckShape(false, Colors.grey.c300)};
  }
`;
const CheckLabel = styled.span`
  grid-area: label;
  grid-row: span 1;
  font-weight: 500;
  font-size: 11px;
  color: ${Colors.grey.c700};
  letter-spacing: 0;
  line-height: 16px;
  margin-bottom: 5px;
  display: block;
`;
const CheckWrap = styled.span`
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
  render(){
    var uniqueID = _.uniqueId(this.props.label+'_')
    return(
      <Group className={this.props.layout === 'horizontal' ? 'horizontal-label' : ''} w={this.props.w} >
        {this.props.children}
      </Group>
    )
  }
}

export class Checkbox extends React.Component {
  render(){
    var labels = this.props.label.isArray? this.props.label : [this.props.label]
    return(
      <InputHolder>
        <CheckLabel>{this.props.groupLabel}</CheckLabel>
        <CheckWrap>
          {labels.map(function(label, i){
            var uniqueID = label.id? label.id : _.uniqueId(label.replace(/\s/g, '-')+'_');
            return (
              <Label for={uniqueID} disabled={label.disabled}>
                <StyledCheckbox
                  checked={label.checked}
                  disabled={label.disabled}
                  required={label.required}
                  value={label.value}
                  id={uniqueID}
                  name={uniqueID} />
                <LabelWrapper>{label}</LabelWrapper>
              </Label>
            )
          })}
        </CheckWrap>
      </InputHolder>
    )
  }
}

export class Input extends React.Component {
  render(){
    var uniqueID = this.props.id? this.props.id : _.uniqueId(this.props.label.replace(/\s/g, '-')+'_')
    return(
      <InputHolder>
        <Label for={uniqueID}>{this.props.label}</Label>
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

export class Textarea extends React.Component {
  render(){
    var uniqueID = this.props.id? this.props.id : _.uniqueId(this.props.label.replace(/\s/g, '-')+'_')
    return(
      <InputHolder className='textarea-holder'>
        <Label for={uniqueID}>{this.props.label}</Label>
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
