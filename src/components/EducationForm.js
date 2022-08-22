import React from 'react';

function EducationForm(props) {
  return (
    <div className='my-3 border p-3'>
      <h5>Education {props.counter + 1} </h5>
      <div className='row gx-2'>
        <div className='my-2 form-floating col-md'>
          <input
            type='text'
            id={`institution-${props.counter}`}
            name={`institution-${props.counter}`}
            className='form-control'
            placeholder='Institution'
            required
          />
          <label
            htmlFor={`institution-${props.counter}`}
            className='form-label'
          >
            Institution
          </label>
        </div>
        <div className='my-2 form-floating col-md'>
          <input
            type='text'
            id={`degree-${props.counter}`}
            name={`degree-${props.counter}`}
            className='form-control'
            placeholder='Degree'
            required
          />
          <label htmlFor={`degree-${props.counter}`} className='form-label'>
            Degree
          </label>
        </div>
        <div className='my-2 form-floating col-md'>
          <input
            type='date'
            id={`institution-completed-${props.counter}`}
            name={`institution-completed-${props.counter}`}
            className='form-control'
            placeholder='Completed'
            required
          />
          <label
            htmlFor={`institution-completed-${props.counter}`}
            className='form-label'
          >
            Completed
          </label>
        </div>
      </div>
    </div>
  );
}

export default EducationForm;
