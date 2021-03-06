import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'msg-notify/dist/notify.css';
import notify from 'msg-notify';
import PropTypes from 'prop-types';
import { postDataThunkPublic } from '../redux/thunks';
import userSignUp from '../redux/actions/AuthActions';
import LoginPage from '../components/LoginComponent';

export class LoginView extends Component {
  state = {
    username: '',
    password: '',
    role: '',
    error: '',
    success: '',
  }

  componentWillReceiveProps(nextProps) {
    const { error: { message }, successMessage } = nextProps;
    const { history } = this.props;
    const { role } = this.state;

    if (successMessage && message === undefined) {
      localStorage.setItem('token', successMessage.access_token);
      const error = successMessage.message;
      notify(error, 'success');
      // eslint-disable-next-line no-unused-expressions
      (role === 'admin') ? history.push('/admin') : history.push('/client');
      window.location.reload();
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
    postDataThunkPublic('auth/login', this.state, userSignUp, 'post');
  }

  render() {
    return (
      <LoginPage
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

LoginView.propTypes = {
  message: PropTypes.string,
  successMessage: PropTypes.object,
  history: PropTypes.object,
  postDataThunkPublic: PropTypes.func,
};

export default connect(mapStateToProps, actionCreator)(LoginView);
