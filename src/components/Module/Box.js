import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';

const Box = styled.section`
  margin: 21px 0 0 0;
  background: ${Colors.white.hex()};
  border: 1px solid ${Colors.grey.c400.hex()};
  box-shadow: 2px 2px 1px 0 rgba(0,0,0,0.04);
  box-sizing: border-box;
`;


export default Box;
