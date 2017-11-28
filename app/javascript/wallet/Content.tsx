import * as React from 'react';
import { Row, Col, Button, Card, CardText, CardBody, CardTitle, CardSubtitle,
        Modal, ModalBody, ModalHeader } from 'reactstrap';
import DashBoard from './Dashboard';
import WalletForm from './Form';

interface ContentState {
  modal: boolean;
}

export default class Content extends React.Component<{}, ContentState> {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
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

        <hr/>
        <Row>
          <Col md="4" sm="12">
            <div className="wallet-card">
              <Card>
                <CardTitle>YOUR BALANCES</CardTitle>
                <hr/>
                <CardText>100$</CardText>
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