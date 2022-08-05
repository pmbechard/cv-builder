import React, { Component } from 'react';
import EducationForm from './EducationForm';

export class EducationArea extends Component {
  render() {
    return (
      <div>
        {[...Array(this.props.formCount).keys()].map((form) => (
          <EducationForm counter={form} key={`education-form-${form}`} />
        ))}
      </div>
    );
  }
}

export default EducationArea;
