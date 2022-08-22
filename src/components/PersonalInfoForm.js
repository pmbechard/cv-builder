import React from 'react';

function PersonalInfoForm(props) {
  return (
    <div className='container'>
      <form action='' method='' className='form' noValidate>
        <div className='row gx-2'>
          <div className='my-2 form-floating col-md'>
            <input
              type='name'
              id='name'
              className='form-control'
              placeholder='Full name'
              required
            />
            <label htmlFor='name' className='form-label'>
              Full name
            </label>
          </div>
          <div className='my-2 form-floating col'>
            <input
              type='location'
              id='location'
              className='form-control'
              placeholder='Location'
              required
            />
            <label htmlFor='location' className='form-label'>
              Location
            </label>
          </div>
        </div>
        <div className='row gx-2'>
          <div className='my-2 form-floating col-md'>
            <input
              type='email'
              id='email'
              className='form-control'
              placeholder='Email'
              required
            />
            <label htmlFor='email' className='form-label'>
              Email
            </label>
          </div>
          <div className='my-2 form-floating col'>
            <input
              type='tel'
              id='phone'
              className='form-control'
              placeholder='Phone'
              required
            />
            <label htmlFor='phone' className='form-label'>
              Phone
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
