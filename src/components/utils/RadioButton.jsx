import React from 'react';
import PropTypes from 'prop-types';

const RadioButtons = ({ onChange }) => {
  return (
    <div>
      <p>
        <label className="radio-input">
          <input name="group1" type="radio" value="admin" onChange={onChange}/>
          <span>Admin</span>
        </label>
        <label className="radio-input">
          <input name="group1" type="radio" value="client" onChange={onChange}/>
          <span>Client</span>
        </label>
      </p>
    </div>
  );
};

RadioButtons.propTypes = {
  onChange: PropTypes.func,
};

export default RadioButtons;
