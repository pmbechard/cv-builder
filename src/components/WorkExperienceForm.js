import React, { Component } from 'react';

export class WorkExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.counter = props.counter;
  }
  render() {
    return (
      <div className='my-3 border p-3'>
        <h5>Company {this.counter + 1} </h5>
        <form action='' method='' className='form' noValidate>
          <div className='row gx-2'>
            <div className='my-2 form-floating col-md'>
              <input
                type='text'
                id={`position-company-${this.counter}`}
                className='form-control'
                placeholder='Position'
                required
              />
              <label
                htmlFor={`position-company-${this.counter}`}
                className='form-label'
              >
                Position
              </label>
            </div>
            <div className='my-2 form-floating col-md'>
              <input
                type='text'
                id={`company-${this.counter}`}
                className='form-control'
                placeholder='Company'
                required
              />
              <label htmlFor={`company-${this.counter}`} className='form-label'>
                Company
              </label>
            </div>
            <div className='my-2 form-floating col'>
              <input
                type='location'
                id={`company-location-${this.counter}`}
                className='form-control'
                placeholder='Location'
                required
              />
              <label
                htmlFor={`company-location-${this.counter}`}
                className='form-label'
              >
                Location
              </label>
            </div>
          </div>
          <div className='row gx-2'>
            <div className='my-2 form-floating col-md'>
              <input
                type='date'
                id={`company-from-${this.counter}`}
                className='form-control'
                placeholder='From'
                required
              />
              <label
                htmlFor={`company-from-${this.counter}`}
                className='form-label'
              >
                From
              </label>
            </div>
            <div className='my-2 form-floating col-md'>
              <input
                type='date'
                id={`company-to-${this.counter}`}
                className='form-control'
                placeholder='To'
                required
              />
              <label
                htmlFor={`company-to-${this.counter}`}
                className='form-label'
              >
                To
              </label>
            </div>
            <div className='row gx-2'>
              <div className='my-2 form-floating col'>
                <textarea
                  className='form-control'
                  placeholder='Describe your role'
                  id={`company-role-${this.counter}`}
                ></textarea>
                <label htmlFor={`company-role-${this.counter}`}>
                  Describe your role
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default WorkExperienceForm;
