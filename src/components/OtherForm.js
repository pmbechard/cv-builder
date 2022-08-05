import React, { Component } from 'react';

export class OtherForm extends Component {
  constructor(props) {
    super(props);

    this.counter = props.counter;
  }

  render() {
    return (
      <div className='my-3 border p-3'>
        <h5>Other {this.counter + 1} </h5>
        <form action='' method='' className='form' noValidate>
          <div className='row gx-2'>
            <div className='my-2 form-floating col-md'>
              <input
                type='text'
                id={`other-heading-${this.counter}`}
                className='form-control'
                placeholder='Heading'
                required
              />
              <label
                htmlFor={`other-heading-${this.counter}`}
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
                id={`other-description-${this.counter}`}
              ></textarea>
              <label htmlFor={`other-description-${this.counter}`}>
                Add content here
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default OtherForm;
