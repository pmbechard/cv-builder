import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class AddFormBtn extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.addForm}>+</Button>
      </div>
    );
  }
}

export default AddFormBtn;
