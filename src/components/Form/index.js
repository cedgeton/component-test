import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';


const StyledInput = styled.input`
  border: 1px solid ${Colors.grey.c400};
  box-shadow: inset 2px 2px 1px 0 rgba(0,0,0,0.08);
  border-radius: 2px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding: 7px 12px;
  outline: 0;
  color: ${Colors.black.c800};
  &::placeholder{
    color: ${Colors.grey.c500};
  }
  &:focus{
    border: 1px solid ${Colors.blue};
  }
`;

const InputHolder = styled.div`
  display: inline-block;
`;
const Label = styled.span`
  font-weight: 400;
  font-size: 11px;
  color: ${Colors.grey.c700};
  letter-spacing: 0;
  line-height: 16px;
`;

export class Input extends React.Component {
  render(){
    return(
      <InputHolder>
        <Label>{this.props.label}</Label>
        <StyledInput placeholder='hold me' />
      </InputHolder>
    )
  }
}
