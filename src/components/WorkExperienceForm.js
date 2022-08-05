import React from 'react';

function WorkExperienceForm({ counter }) {
  return (
    <div className='my-3 border p-3'>
      <h5>Company {counter + 1} </h5>
      <form action='' method='' className='form' noValidate>
        <div className='row gx-2'>
          <div className='my-2 form-floating col-md'>
            <input
              type='text'
              id={`position-company-${counter}`}
              className='form-control'
              placeholder='Position'
              required
            />
            <label
              htmlFor={`position-company-${counter}`}
              className='form-label'
            >
              Position
            </label>
          </div>
          <div className='my-2 form-floating col-md'>
            <input
              type='text'
              id={`company-${counter}`}
              className='form-control'
              placeholder='Company'
              required
            />
            <label htmlFor={`company-${counter}`} className='form-label'>
              Company
            </label>
          </div>
          <div className='my-2 form-floating col'>
            <input
              type='location'
              id={`company-location-${counter}`}
              className='form-control'
              placeholder='Location'
              required
            />
            <label
              htmlFor={`company-location-${counter}`}
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
              id={`company-from-${counter}`}
              className='form-control'
              placeholder='From'
              required
            />
            <label htmlFor={`company-from-${counter}`} className='form-label'>
              From
            </label>
          </div>
          <div className='my-2 form-floating col-md'>
            <input
              type='date'
              id={`company-to-${counter}`}
              className='form-control'
              placeholder='To'
              required
            />
            <label htmlFor={`company-to-${counter}`} className='form-label'>
              To
            </label>
          </div>
          <div className='row gx-2'>
            <div className='my-2 form-floating col'>
              <textarea
                class='form-control'
                placeholder='Describe your role'
                id={`company-role-${counter}`}
              ></textarea>
              <label for={`company-role-${counter}`}>Describe your role</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default WorkExperienceForm;
