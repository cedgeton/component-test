import React from 'react';
import styled from 'styled-components';
import {Colors, Header, Text}  from '../../components/System';
import Button  from '../../components/Button';
import Icon  from '../../components/Icon';
import ModalClass, { ModalProvider } from "styled-react-modal";

export class ModalProviders extends React.Component{
  render(){
    return
  }
};

const StyledModal = ModalClass.styled`
  width: 60vw;
  background-color: white;
  opacity: ${props => props.opacity};
  border-radius: 2px;
  transition: opacity ease 200ms;
`;
const Title = styled(Header)`
  border-bottom: 1px solid ${Colors.grey.c400};
  background: ${Colors.grey.c200};
  display: block;
  padding: 8px 10px 5px 15px;
  border-radius: 2px 2px 0 0;
  text-align: left;
`;
const Footer = styled(Title)`
  text-align: right;
  border-top: 1px solid ${Colors.grey.c400};
  border-bottom: 0;
  border-radius: 0 0 2px 2px;
`;
const Content = styled.div`
  padding: 15px 15px 40px 15px;
  text-align: left;
`;
const Close = styled(Icon)`
  float:right;
  cursor: pointer;
  vertical-align: middle;
`;

export default class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      opacity: 0
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.afterOpen = this.afterOpen.bind(this)
    this.beforeClose = this.beforeClose.bind(this)
  }

  toggleModal(e) {
    this.setState({ isOpen: !this.state.isOpen })
  }

  afterOpen () {
    setTimeout(() => {
      this.setState({ opacity: 1 })
    })
  }

  beforeClose () {
    return new Promise(resolve => {
      this.setState({ opacity: 0 })
      setTimeout(resolve, 200)
    })
  }

  render() {
    return (
      <ModalProvider>
        <div>
          <Button onClick={this.toggleModal}>Open modal</Button>
          <StyledModal
            isOpen={this.state.isOpen}
            afterOpen={this.afterOpen}
            beforeClose={this.beforeClose}
            onBackgroundClick={this.toggleModal}
            onEscapeKeydown={this.toggleModal}
            opacity={this.state.opacity}>
            <Title size='component'>{this.props.title} <Close name='close' w={20} p={2.5} color={Colors.black.c300}  onClick={this.toggleModal}/></Title>
            <Content><Text size='large' spacing='loose'>{this.props.content}</Text></Content>
            <Footer>
              {this.props.actions.map(function(action, i){
                return (
                  <Button
                    buttonStyle={action.style}
                    onClick={this.toggleModal} key={i}>{action.text}</Button>
                )
              }, this)}
            </Footer>
          </StyledModal>
        </div>
      </ModalProvider>
    )
  }
}
