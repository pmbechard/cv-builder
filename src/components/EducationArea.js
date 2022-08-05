import React, { Component } from 'react';
import EducationForm from './EducationForm';

export class EducationArea extends Component {
  constructor(props) {
    super(props);

    this.counter = 0;
  }

  render() {
    return (
      <div>
        <EducationForm counter={this.counter++} />
        <EducationForm counter={this.counter++} />
        <EducationForm counter={this.counter++} />
      </div>
    );
  }
}

export default EducationArea;
