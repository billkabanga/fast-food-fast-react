import React from 'react';
import PropTypes from 'prop-types';

const SignupButton = ({ onClick, name }) => {
  return (
    <div>
      <button className="btn waves-effect waves-light" type="button" onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

SignupButton.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default SignupButton;
