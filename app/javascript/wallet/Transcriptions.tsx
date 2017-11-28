import * as React from 'react';
import { Col, Row, Table, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default class Transcriptions extends React.Component {
  render() {
    return (
      <Row>
        <Col md="12">
          <div className="wallet-card">
            <Card className="card-transcription">
              <CardTitle>ALL TRANSCRIPTIONS</CardTitle>
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