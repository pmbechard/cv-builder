import React, { Component } from 'react';

export class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.counter = props.counter;
  }

  render() {
    return (
      <div className='my-3 border p-3'>
        <h5>Education {this.counter + 1} </h5>
        <form action='' method='' className='form' noValidate>
          <div className='row gx-2'>
            <div className='my-2 form-floating col-md'>
              <input
                type='text'
                id={`institution-${this.counter}`}
                className='form-control'
                placeholder='Institution'
                required
              />
              <label
                htmlFor={`institution-${this.counter}`}
                className='form-label'
              >
                Institution
              </label>
            </div>
            <div className='my-2 form-floating col-md'>
              <input
                type='text'
                id={`degree-${this.counter}`}
                className='form-control'
                placeholder='Degree'
                required
              />
              <label htmlFor={`degree-${this.counter}`} className='form-label'>
                Degree
              </label>
            </div>
            <div className='my-2 form-floating col-md'>
              <input
                type='date'
                id={`institution-completed-${this.counter}`}
                className='form-control'
                placeholder='Completed'
                required
              />
              <label
                htmlFor={`institution-completed-${this.counter}`}
                className='form-label'
              >
                Completed
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EducationForm;
