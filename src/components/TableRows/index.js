import React from 'react';
import styled from 'styled-components';

const RowStyle = styled.div`
    padding: 14px 16px;
    border-top: 1px solid #F1F2F5;
`;
const RowTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #1F262D;
  line-height: 20px;
  margin-right: 5px;
`;
const RowSubTitle = styled.span`
  font-family: 400;
  font-size: 11px;
  color: #A7AFBC;
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
            <RowTitle>{row.title}</RowTitle><RowSubTitle>{row.subtitle}</RowSubTitle>
            <Line2>{row.line2}</Line2>
          </RowStyle>
        )
      })
    )
  }
}
