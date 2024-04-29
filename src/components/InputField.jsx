import React from 'react';

const InputField = ({ label, value, onChange, required }) => (
  <div>
    <label>{label}</label>
    <input type="text" value={value} onChange={onChange} required={required} />
  </div>
);

export default InputField;