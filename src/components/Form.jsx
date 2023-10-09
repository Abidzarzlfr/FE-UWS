import React from "react";
import './Form.css';
const Form = () => {
  return (
    <div className="wrapper">
      <h1>FE-UWS</h1>
      <form>
        <fieldset>
          <label>
            <p>Input here</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
