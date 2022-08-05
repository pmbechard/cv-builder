import React, { Component } from 'react';
import WorkExperienceForm from './WorkExperienceForm';

export class WorkExperienceArea extends Component {
  constructor(props) {
    super(props);
    this.counter = 0;
  }

  render() {
    return (
      <div>
        <WorkExperienceForm counter={this.counter++} />
        <WorkExperienceForm counter={this.counter++} />
        <WorkExperienceForm counter={this.counter++} />
      </div>
    );
  }
}

export default WorkExperienceArea;
