import React from 'react';

function WorkExperienceForm(props) {
  return (
    <div className='my-3 border p-3'>
      <h5>Company {props.counter + 1} </h5>
      <div className='row gx-2'>
        <div className='my-2 form-floating col-md'>
          <input
            type='text'
            id={`position-company-${props.counter + 1}`}
            name={`position-company-${props.counter + 1}`}
            className='form-control'
            placeholder='Position'
            required
          />
          <label
            htmlFor={`position-company-${props.counter + 1}`}
            className='form-label'
          >
            Position
          </label>
        </div>
        <div className='my-2 form-floating col-md'>
          <input
            type='text'
            id={`company-${props.counter + 1}`}
            name={`company-${props.counter + 1}`}
            className='form-control'
            placeholder='Company'
            required
          />
          <label
            htmlFor={`company-${props.counter + 1}`}
            className='form-label'
          >
            Company
          </label>
        </div>
        <div className='my-2 form-floating col'>
          <input
            type='location'
            id={`company-location-${props.counter + 1}`}
            name={`company-location-${props.counter + 1}`}
            className='form-control'
            placeholder='Location'
            required
          />
          <label
            htmlFor={`company-location-${props.counter + 1}`}
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
            id={`company-from-${props.counter + 1}`}
            name={`company-from-${props.counter + 1}`}
            className='form-control'
            placeholder='From'
            required
          />
          <label
            htmlFor={`company-from-${props.counter + 1}`}
            className='form-label'
          >
            From
          </label>
        </div>
        <div className='my-2 form-floating col-md'>
          <input
            type='date'
            id={`company-to-${props.counter + 1}`}
            name={`company-to-${props.counter + 1}`}
            className='form-control'
            placeholder='To'
            required
          />
          <label
            htmlFor={`company-to-${props.counter + 1}`}
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
              id={`company-role-${props.counter + 1}`}
              name={`company-role-${props.counter + 1}`}
              required
            ></textarea>
            <label htmlFor={`company-role-${props.counter + 1}`}>
              Describe your role
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceForm;
