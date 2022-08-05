import React, { Component } from 'react';
import OtherForm from './OtherForm';

export class OtherArea extends Component {
  render() {
    return (
      <div>
        {[...Array(this.props.formCount).keys()].map((form) => (
          <OtherForm counter={form} key={`other-form-${form}`} />
        ))}
      </div>
    );
  }
}

export default OtherArea;
