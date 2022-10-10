import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
const actions = [
  { label: "Student", value: 1 },
  { label: "TA", value: 2 },
];

const renderForm = (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Rollnumber </label>
          <input type="text" name="rollnumber" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="col-md-4">
        <Select options={ actions } />
      </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
 );