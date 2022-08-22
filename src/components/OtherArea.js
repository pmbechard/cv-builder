import React from 'react';
import OtherForm from './OtherForm';

function OtherArea(props) {
  return (
    <div>
      {[...Array(props.formCount).keys()].map((form) => (
        <OtherForm counter={form} key={`other-form-${form}`} />
      ))}
    </div>
  );
}

export default OtherArea;
