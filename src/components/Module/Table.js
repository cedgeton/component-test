import React from 'react';
import styled from 'styled-components';
import TableRow from '../../components/TableRow';

const TableWrapper = styled.section`

`;

export default class TableContent extends React.Component {
  render(){
    var rows = this.props.rows;
    return (
      <TableWrapper className='tableModule'>
        {rows.map(function(row, i){
           return <TableRow title={row.title} subtitle={row.subtitle} line2={row.line2} />
        })}
      </TableWrapper>
    )
  }
}
