import React from 'react';

const TextAreaField = ({ label, value, onChange, required }) => (
  <div>
    <label>{label}</label>
    <textarea value={value} onChange={onChange} required={required} />
  </div>
);

export default TextAreaField;