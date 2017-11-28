import * as React from 'react';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import axios from 'axios';

interface WalletFormState {
  recipient_id: string;
  amount: string;
  description: string;
}

interface WalletFormProps {
  sender_id: string;
  handleSuccess(): void;
}

export default class WalletForm extends React.Component<WalletFormProps, WalletFormState> {
  constructor(props: WalletFormProps) {
    super(props);
    this.state = {
      recipient_id: '',
      amount: '',
      description: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/transcriptions', {
      transcription: {
        sender_id: this.props.sender_id,
        recipient_id: this.state.recipient_id,
        amount: parseFloat(this.state.amount),
        description: this.state.description,
      }
    })
    .then(response => {
      this.props.handleSuccess();
    })
    .catch(error => {
      console.log(error.response.data);
    })
  }

  handleChange(e) {
    if (e.target.name == 'transcription[recipient_id]')
      this.setState({
        recipient_id: e.target.value
      });
    if (e.target.name == 'transcription[amount]')
      this.setState({
        amount: e.target.value
      });
    if (e.target.name == 'transcription[description]')
      this.setState({
        description: e.target.value
      });
  }

  render() {
    return (
      <Form className="wallet-form" onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
          <Label for="recipient-id">To: </Label>
          <Input type="text" name="transcription[recipient_id]" 
                 id="recipient-id" placeholder="Paste recipient wallet id"
                 onChange={this.handleChange.bind(this)}/>
        </FormGroup>

        <FormGroup>
          <Label for="amount">Amount: </Label>
          <InputGroup>
            <Input type="text" name="transcription[amount]" 
                   id="amount" placeholder="0"
                   onChange={this.handleChange.bind(this)}/>
            <InputGroupAddon>BTC</InputGroupAddon>
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for="description">Description: </Label>
          <Input type="textarea" name="transcription[description]" 
                 id="description" onChange={this.handleChange.bind(this)}/>
        </FormGroup>
        <hr/>
        <Button className="wallet-submit">CONTINUE</Button>
      </Form>
    );
  }
}