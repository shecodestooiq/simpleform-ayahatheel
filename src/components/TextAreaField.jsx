import React from 'react';

const TextAreaField = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <textarea value={value} onChange={onChange} />
  </div>
);

export default TextAreaField;