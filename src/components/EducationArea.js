import React, { Component } from 'react';
import EducationForm from './EducationForm';

export class EducationArea extends Component {
  constructor(props) {
    super(props);

    this.counter = 3;
    this.forms = [...Array(this.counter).keys()];
  }

  render() {
    return (
      <div>
        {this.forms.map((form) => (
          <EducationForm counter={form} key={`education-form-${form}`} />
        ))}
      </div>
    );
  }
}

export default EducationArea;
