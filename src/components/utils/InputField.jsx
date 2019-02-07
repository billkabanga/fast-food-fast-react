import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ item, onChange }) => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <input id={item} type="text" className="validate input-item" name={item} onChange={onChange}/>
        <label htmlFor={item}>{item}</label>
      </div>
    </div>
  );
};

InputField.propTypes = {
  item: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
