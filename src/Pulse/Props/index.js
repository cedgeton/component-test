import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const Option = styled.span`
  display: block;
`;


export default class PropTable extends React.Component {
  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th></th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {_.map(this.props.properties, function(prop, i){
            return (
              <tr key={i}>
                <td>{prop.property}</td>
                <td>{prop.description}</td>
                <td>{prop.type}</td>
                <td>
                  {_.map(prop.options, function(option, i){
                    return <Option key={i}>{option}</Option>
                  })}
                </td>
                <td>{prop.default}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
