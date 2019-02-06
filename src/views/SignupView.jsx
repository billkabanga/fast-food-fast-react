import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'msg-notify/dist/notify.css';
import notify from 'msg-notify';
import PropTypes from 'prop-types';
import SignupPage from '../components/SignupComponent';
import postDataThunkPublic from '../redux/thunks';
import userSignUp from '../redux/actions/AuthActions';

class SignupView extends Component {
  state = {
    username: '',
    email: '',
    contact: '',
    password: '',
    role: '',
    error: '',
    success: '',
  }

  componentWillReceiveProps(nextProps) {
    const { error: { message }, successMessage } = nextProps;
    const { history } = this.props;

    if (successMessage && message === undefined) {
      const error = successMessage.message;
      notify(error, 'success');
      history.push('/');
      this.setState({
        success: successMessage,
      });
    } else if (message) {
      notify(message, 'error');
      this.setState({
        error: message,
      });
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleRadioClick = (event) => {
    event.preventDefault();
    this.setState({
      role: event.currentTarget.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { postDataThunkPublic } = this.props;
    postDataThunkPublic('auth/signup', this.state, userSignUp, 'post');
  }

  render() {
    return (
      <SignupPage
      onSubmit={this.handleSubmit}
      onRadioChange={this.handleRadioClick}
      onChange={this.handleChange}
      />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    error: state.authReducer.error,
    successMessage: state.authReducer.message,
  };
};

const actionCreator = {
  postDataThunkPublic,
};

SignupView.propTypes = {
  message: PropTypes.string,
  error: PropTypes.object,
  successMessage: PropTypes.object,
  history: PropTypes.func,
  postDataThunkPublic: PropTypes.func,
};

export default connect(mapStateToProps, actionCreator)(SignupView);
