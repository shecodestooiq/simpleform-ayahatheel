import React, { useState } from 'react';
import InputField from '../components/InputField';
import TextAreaField from '../components/TextAreaField';
import './HW.css'; 

const HW = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert({ name, email, message });
  };

  return (
    <form className="hw-form" onSubmit={handleSubmit}>
      <InputField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <InputField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <TextAreaField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default HW;
