import React from 'react';

function EducationForm({ counter }) {
  return (
    <div className='my-3 border p-3'>
      <h5>Education {counter + 1} </h5>
      <form action='' method='' className='form' noValidate>
        <div className='row gx-2'>
          <div className='my-2 form-floating col-md'>
            <input
              type='text'
              id={`institution-${counter}`}
              className='form-control'
              placeholder='Institution'
              required
            />
            <label htmlFor={`institution-${counter}`} className='form-label'>
              Institution
            </label>
          </div>
          <div className='my-2 form-floating col-md'>
            <input
              type='text'
              id={`degree-${counter}`}
              className='form-control'
              placeholder='Degree'
              required
            />
            <label htmlFor={`degree-${counter}`} className='form-label'>
              Degree
            </label>
          </div>
          <div className='my-2 form-floating col-md'>
            <input
              type='date'
              id={`institution-completed-${counter}`}
              className='form-control'
              placeholder='Completed'
              required
            />
            <label
              htmlFor={`institution-completed-${counter}`}
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

export default EducationForm;
