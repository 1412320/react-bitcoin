import * as React from 'react';
import { Row, Col, Button, Card, CardText, CardBody, CardTitle, CardSubtitle, Table } from 'reactstrap';
import axios from 'axios';

interface HomeProps {
  balance: number;
}

interface HomeState {
  is_all: boolean;
  transcriptions: Array<TranscriptionInfo>;
}

interface TranscriptionInfo {
  sender: string;
  recipient: string;
  amount: number;
  description: string;
}

export default class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = ({
      transcriptions: new Array<TranscriptionInfo>(),
      is_all: false
    })
  }

  handleAll() {
    this.setState({
      is_all: true
    },this.getAll)
  }

  handleNewest() {
    this.setState({
      is_all: false
    },this.getNewest)
  }

  getNewest() {
    this.state.transcriptions.splice(0, this.state.transcriptions.length);
    this.setState(this.state, () => {
      axios.get('/transcriptions/newest')
      .then(response => {
        response.data.forEach(e => {
          this.state.transcriptions.push({
            sender: e.sender_id,
            recipient: e.recipient_id,
            amount: e.amount,
            description: e.description
          })
        })
        this.setState(this.state);
      })
      .catch(error => {
  
      })
    })
  }

  getAll() {
    this.state.transcriptions.splice(0, this.state.transcriptions.length);
    this.setState(this.state, () => {
      axios.get('/transcriptions/all')
      .then(response => {
        response.data.forEach(e => {
          this.state.transcriptions.push({
            sender: e.sender_id,
            recipient: e.recipient_id,
            amount: e.amount,
            description: e.description
          })
        })
        this.setState(this.state);
      })
      .catch(error => {
  
      })
    })
  }

  componentWillMount() {
    this.handleNewest();
  }

  render() {
    return (
      <Row>
        <Col sm="12" md="3">
          <div className="wallet-card">
            <Card className="card-balance">
              <CardTitle>YOUR BALANCES</CardTitle>
              <hr/>
              <CardText>${this.props.balance}</CardText>
            </Card>
          </div>
        </Col>
        <Col sm="12" md="9">
          <div className="wallet-card">
            <Card className="card-transcription">
              <Row>
                <Col md="9" sm="12">
                  <CardTitle>{`${this.state.is_all? 'ALL': 'NEWEST'} TRANSCRIPTIONS`}</CardTitle>
                </Col>
                <Col md="3" sm="4">
                  <Button className="btn-newest" onClick={this.handleNewest.bind(this)}>Newest</Button>
                  <Button className="btn-all" onClick={this.handleAll.bind(this)}>All</Button>
                </Col>
              </Row>
              <div className="card-table">
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Sender</th>
                      <th>Recipient</th>
                      <th>Amount</th>
                      <th>Description</th>                  
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.transcriptions.map((e, i) => (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{e.sender}</td>
                        <td>{e.recipient}</td>
                        <td>{e.amount}</td>
                        <td>{e.description}</td>
                      </tr>
                    ))
                    }
                  </tbody>
                </Table>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    );
  }
}