import * as React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Header from './Header';
import SubHeader from './SubHeader';
import Home from './Home';
import WalletForm from './Form';
import axios from 'axios';

interface HomeContainerState {
  modal: boolean;
  balance: number;
  wallet_id: string;
}

export default class HomeContainer extends React.Component<{}, HomeContainerState> {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      wallet_id: '',
      balance: 0
    }
  }

  getWalletInfo() {
    const token = window.localStorage.getItem('auth_token');
    axios.get(`/wallets/${token}`)
    .then(response => {
      this.setState({
        wallet_id: response.data.w_id,
        balance: response.data.balance
      })
    })
    .catch(error => {

    })
  }

  componentWillMount() {
    this.getWalletInfo();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleSuccess() {
    this.toggle();
    this.getWalletInfo();
  }

  render() {
    return (
      <Header>
        <SubHeader toggle={this.toggle.bind(this)} wallet_id={this.state.wallet_id}></SubHeader>
        <Home balance={this.state.balance}></Home>
        <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)}>
          <ModalHeader toggle={this.toggle.bind(this)}>
          <i className="send-icon fa fa-paper-plane"></i>
          Send
          </ModalHeader>
          <hr/>
          <ModalBody>
            <WalletForm sender_id={this.state.wallet_id} 
                        handleSuccess={this.handleSuccess.bind(this)}></WalletForm>
          </ModalBody>
        </Modal>
      </Header>
    );
  }
}