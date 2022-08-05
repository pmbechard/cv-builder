import React, { Component } from 'react';
import WorkExperienceForm from './WorkExperienceForm';

export class WorkExperienceArea extends Component {
  constructor(props) {
    super(props);

    this.counter = 2;
    this.forms = [...Array(this.counter).keys()];
  }

  render() {
    return (
      <div>
        {this.forms.map((form) => (
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
