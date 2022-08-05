import React, { Component } from 'react';
import OtherForm from './OtherForm';

export class OtherArea extends Component {
  constructor(props) {
    super(props);

    this.counter = 1;
    this.forms = [...Array(this.counter).keys()];
  }

  render() {
    return (
      <div>
        {this.forms.map((form) => {
          return <OtherForm counter={form} key={`other-form-${form}`} />;
        })}
      </div>
    );
  }
}

export default OtherArea;
