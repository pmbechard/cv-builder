import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class RemoveFormBtn extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.removeForm} className='btn-danger'>
          Remove
        </Button>
      </div>
    );
  }
}

export default RemoveFormBtn;
