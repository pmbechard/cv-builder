import React, { Component } from 'react';
import WorkExperienceForm from './WorkExperienceForm';

export class WorkExperienceArea extends Component {
  render() {
    return (
      <div>
        {[...Array(this.props.formCount).keys()].map((form) => (
          <WorkExperienceForm
            counter={form}
            key={`work-experience-form-${form}`}
          />
        ))}
      </div>
    );
  }
}

export default WorkExperienceArea;
