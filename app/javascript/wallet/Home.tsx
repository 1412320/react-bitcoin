import * as React from 'react';
import { Row, Col, Button, Card, CardText, CardBody, CardTitle, CardSubtitle, Table } from 'reactstrap';

interface HomeProps {
  balance: number;
}

export default class Home extends React.Component<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props);
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
    );
  }
}