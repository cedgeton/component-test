import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';
import _ from 'lodash';


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
const Label = styled.label`
  font-weight: 500;
  font-size: 11px;
  color: ${Colors.grey.c700};
  letter-spacing: 0;
  line-height: 16px;
  margin-bottom: 5px;
  display: inline-block;
  cursor: pointer;
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

export class Input extends React.Component {
  render(){
    var uniqueID = _.uniqueId(this.props.label+'_')
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
    var uniqueID = _.uniqueId(this.props.label+'_')
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
