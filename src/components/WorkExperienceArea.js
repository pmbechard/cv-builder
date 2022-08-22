import React from 'react';
import WorkExperienceForm from './WorkExperienceForm';

function WorkExperienceArea(props) {
  return (
    <div>
      {[...Array(props.formCount).keys()].map((form) => (
        <WorkExperienceForm
          counter={form}
          key={`work-experience-form-${form}`}
        />
      ))}
    </div>
  );
}

export default WorkExperienceArea;
