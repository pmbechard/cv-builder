import React from 'react';
import EducationForm from './EducationForm';

function EducationArea(props) {
  return (
    <div>
      {[...Array(props.formCount).keys()].map((form) => (
        <EducationForm counter={form} key={`education-form-${form}`} />
      ))}
    </div>
  );
}

export default EducationArea;
