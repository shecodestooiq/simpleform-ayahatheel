import React, { useState } from "react";
import "../components/formsty.css";
import TextAreaField from "../components/TextAreaField";
import InputField from "../components/InputField";

const HW = () => {
  const [Username, setUserName] = useState("");
  const [Useremail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormaSubmit = (e) => {
    e.preventDefault();
    alert(`The info you submitted was: ${Username} ${Useremail} ${message}`);
  };

  return (
    <>
      <form className="Form-cont" onSubmit={handleFormaSubmit}>
        <label>
          Name:
          <InputField
            className="NameInput"
            value={Username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <InputField
            className="EmailInput"
            value={Useremail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Message:
          <TextAreaField
            className="TextAreaF"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default HW;
