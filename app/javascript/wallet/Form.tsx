import * as React from 'react';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

export default class WalletForm extends React.Component {
  render() {
    return (
      <Form className="wallet-form">
        <FormGroup>
          <Label for="recipient-id">To: </Label>
          <Input type="text" name="recipient_id" id="recipient-id" placeholder="Paste recipient wallet id"/>
        </FormGroup>

        <FormGroup>
          <Label for="amount">Amount: </Label>
          <InputGroup>
            <Input type="text" name="amount" id="amount" placeholder="0"/>
            <InputGroupAddon>BTC</InputGroupAddon>
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for="description">Description: </Label>
          <Input type="textarea" name="description" id="description"/>
        </FormGroup>
        <hr/>
        <Button className="wallet-submit">CONTINUE</Button>
      </Form>
    );
  }
}