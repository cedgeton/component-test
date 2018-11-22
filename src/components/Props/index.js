import React from 'react';
import styled from 'styled-components';

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
            <th>oneOf</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {this.props.properties.map(function(prop, i){
            return (
              <tr>
                <td>{prop.property}</td>
                <td>{prop.description}</td>
                <td>{prop.type}</td>
                <td>
                  {prop.options.map(function(option, i){
                    return <Option>{option}</Option>
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
