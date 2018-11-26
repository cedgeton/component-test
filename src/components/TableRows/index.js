import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';

const RowStyle = styled.div`
    padding: 14px 16px;
    border-top: 1px solid ${Colors.grey.c400};
`;
const RowTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${Colors.black.c800};
  line-height: 20px;
  margin-right: 5px;
`;
const RowSubTitle = styled.span`
  font-family: 400;
  font-size: 11px;
  color: ${Colors.grey.c700};
  line-height: 16px;
`;
const Line2 = styled(RowSubTitle)`
  display:block;
  margin-top:3px;
`;

export default class TableContent extends React.Component {
  render(){
    var rows = this.props.rows;
    return (
      rows.map(function(row, i){
         return(
          <RowStyle>
            <RowTitle>{row.name}</RowTitle><RowSubTitle>{row.subtitle}</RowSubTitle>
            <Line2>{row.line2}</Line2>
          </RowStyle>
        )
      })
    )
  }
}
