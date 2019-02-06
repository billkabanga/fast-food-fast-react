import React from 'react';
import PropTypes from 'prop-types';

const UsernameField = ({ onChange }) => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <i className="material-icons prefix">account_circle</i>
        <input id="icon_prefix" type="text" className="validate" name="username" onChange={onChange}/>
        <label htmlFor="icon_prefix">Username</label>
      </div>
    </div>
  );
};

UsernameField.propTypes = {
  onChange: PropTypes.func,
};

export default UsernameField;
