import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';

function SectionCard(props) {
  return (
    <div className='card mx-auto my-3 col col-lg-8 col-md-9 col-sm-10 mx-auto shadow-sm'>
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        {props.title === 'Personal Information' && <PersonalInfoForm />}
      </div>
    </div>
  );
}

export default SectionCard;
