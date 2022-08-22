import React from 'react';

function OtherForm(props) {
  return (
    <div className='my-3 border p-3'>
      <h5>Other {props.counter + 1} </h5>
      <div className='row gx-2'>
        <div className='my-2 form-floating col-md'>
          <input
            type='text'
            id={`other-heading-${props.counter}`}
            name={`other-heading-${props.counter}`}
            className='form-control'
            placeholder='Heading'
            required
          />
          <label
            htmlFor={`other-heading-${props.counter}`}
            className='form-label'
          >
            Heading
          </label>
        </div>
      </div>
      <div className='row gx-2'>
        <div className='my-2 form-floating col'>
          <textarea
            className='form-control'
            placeholder='Add content here'
            id={`other-description-${props.counter}`}
            name={`other-description-${props.counter}`}
          ></textarea>
          <label htmlFor={`other-description-${props.counter}`}>
            Add content here
          </label>
        </div>
      </div>
    </div>
  );
}

export default OtherForm;
