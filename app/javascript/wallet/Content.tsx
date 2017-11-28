import * as React from 'react';
import { Row, Col, Button, Card, CardText, CardBody, CardTitle, CardSubtitle,
        Modal, ModalBody, ModalHeader } from 'reactstrap';
import DashBoard from './Dashboard';
import WalletForm from './Form';
import axios from 'axios';

interface ContentState {
  modal: boolean;
  balance: number;
  wallet_id: string;
}

export default class Content extends React.Component<{}, ContentState> {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      wallet_id: '',
      balance: 0
    }
  }

  componentWillMount() {
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

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <DashBoard>
        <h3 className="wallet-header">BE YOUR OWN BANK.
          <span className="wallet-copyright">®</span>
        </h3>
        
        <Button className="btn-wallet" onClick={this.toggle.bind(this)}>
          <i className="send-icon fa fa-paper-plane"></i>
          Send
        </Button>

        <span className="wallet-id">My wallet ID: {this.state.wallet_id}</span>

        <hr/>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div className="wallet-card">
              <Card>
                <CardTitle>YOUR BALANCES</CardTitle>
                <hr/>
                <CardText>${this.state.balance}</CardText>
              </Card>
            </div>
          </Col>
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)}>
          <ModalHeader toggle={this.toggle.bind(this)}>
          <i className="send-icon fa fa-paper-plane"></i>
          Send
          </ModalHeader>
          <hr/>
          <ModalBody>
            <WalletForm></WalletForm>
          </ModalBody>
        </Modal>
      </DashBoard>
    );
  }
}