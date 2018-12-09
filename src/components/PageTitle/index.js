import React from 'react';
import {Header, Text}  from '../../components/System';

export default class PageTitle extends React.Component {

  render(){
    return (
      <span>
        <Header bottom='none'>{this.props.title}</Header>
        <Text size='large'>{this.props.subTitle}</Text>
      </span>
    )
  }
}
