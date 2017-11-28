import * as React from 'react';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import axios from 'axios';

export default class WalletForm extends React.Component {
  handleSubmit() {

  }

  render() {
    return (
      <Form className="wallet-form" onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
          <Label for="recipient-id">To: </Label>
          <Input type="text" name="transcription[recipient_id]" id="recipient-id" placeholder="Paste recipient wallet id"/>
        </FormGroup>

        <FormGroup>
          <Label for="amount">Amount: </Label>
          <InputGroup>
            <Input type="text" name="transcription[amount]" id="amount" placeholder="0"/>
            <InputGroupAddon>BTC</InputGroupAddon>
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for="description">Description: </Label>
          <Input type="textarea" name="transcription[description]" id="description"/>
        </FormGroup>
        <hr/>
        <Button className="wallet-submit">CONTINUE</Button>
      </Form>
    );
  }
}