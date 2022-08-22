import React from 'react';
import { Button } from 'react-bootstrap';

function RemoveFormBtn(props) {
  return (
    <div>
      <Button onClick={props.removeForm} className='btn-danger'>
        Remove
      </Button>
    </div>
  );
}

export default RemoveFormBtn;
