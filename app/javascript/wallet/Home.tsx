import * as React from 'react';
import { Row, Col, Button, Card, CardText, CardBody, CardTitle, CardSubtitle,
        Modal, ModalBody, ModalHeader, Table } from 'reactstrap';
import Header from './Header';
import SubHeader from './SubHeader';
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
        <Row>
          <Col sm="12" md="3">
            <div className="wallet-card">
              <Card className="card-balance">
                <CardTitle>YOUR BALANCES</CardTitle>
                <hr/>
                <CardText>${this.state.balance}</CardText>
              </Card>
            </div>
          </Col>
          <Col sm="12" md="9">
            <div className="wallet-card">
              <Card className="card-transcription">
                <CardTitle>NEWEST TRANSCRIPTIONS</CardTitle>
                <CardText>
                  <Table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardText>
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
            <WalletForm sender_id={this.state.wallet_id} 
                        handleSuccess={this.handleSuccess.bind(this)}></WalletForm>
          </ModalBody>
        </Modal>
      </Header>
    );
  }
}