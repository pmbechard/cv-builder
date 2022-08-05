import React, { Component } from 'react';

export class WorkExperienceForm extends Component {
  render() {
    return (
      <div className='my-3 border p-3'>
        <h5>Company {this.props.counter + 1} </h5>
        <form action='' method='' className='form' noValidate>
          <div className='row gx-2'>
            <div className='my-2 form-floating col-md'>
              <input
                type='text'
                id={`position-company-${this.props.counter + 1}`}
                className='form-control'
                placeholder='Position'
                required
              />
              <label
                htmlFor={`position-company-${this.props.counter + 1}`}
                className='form-label'
              >
                Position
              </label>
            </div>
            <div className='my-2 form-floating col-md'>
              <input
                type='text'
                id={`company-${this.props.counter + 1}`}
                className='form-control'
                placeholder='Company'
                required
              />
              <label
                htmlFor={`company-${this.props.counter + 1}`}
                className='form-label'
              >
                Company
              </label>
            </div>
            <div className='my-2 form-floating col'>
              <input
                type='location'
                id={`company-location-${this.props.counter + 1}`}
                className='form-control'
                placeholder='Location'
                required
              />
              <label
                htmlFor={`company-location-${this.props.counter + 1}`}
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
                id={`company-from-${this.props.counter + 1}`}
                className='form-control'
                placeholder='From'
                required
              />
              <label
                htmlFor={`company-from-${this.props.counter + 1}`}
                className='form-label'
              >
                From
              </label>
            </div>
            <div className='my-2 form-floating col-md'>
              <input
                type='date'
                id={`company-to-${this.props.counter + 1}`}
                className='form-control'
                placeholder='To'
                required
              />
              <label
                htmlFor={`company-to-${this.props.counter + 1}`}
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
                  id={`company-role-${this.props.counter + 1}`}
                ></textarea>
                <label htmlFor={`company-role-${this.props.counter + 1}`}>
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
