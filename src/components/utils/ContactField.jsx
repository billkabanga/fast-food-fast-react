import React from 'react';
import PropTypes from 'prop-types';

const ContactField = ({ onChange }) => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <i className="material-icons prefix">phone</i>
        <input id="icon_telephone" type="tel" className="validate" name="contact" onChange={onChange}/>
        <label htmlFor="icon_telephone">Telephone</label>
      </div>
    </div>
  );
};

ContactField.propTypes = {
  onChange: PropTypes.func,
};

export default ContactField;
