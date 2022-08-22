import React from 'react';
import { Button } from 'react-bootstrap';

function AddFormBtn(props) {
  return (
    <div>
      <Button onClick={props.addForm}>Add</Button>
    </div>
  );
}

export default AddFormBtn;
