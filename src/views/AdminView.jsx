import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'msg-notify/dist/notify.css';
import notify from 'msg-notify';
import AdminComponent from '../components/AdminComponent';
import { postDataThunkPrivate } from '../redux/thunks';
import addMenuItem from '../redux/actions/MenuActions';


export class AdminView extends Component {
  state = {
    item: '',
    price: '',
    success: '',
    error: '',
  }

  componentWillReceiveProps(nextProps) {
    const { error: { message }, success } = nextProps;
    const { history } = this.props;

    if (success && message === undefined) {
      const successMessage = success.message;
      notify(successMessage, 'success');
      this.setState({
        success: successMessage,
      });
    } else if (message) {
      const errorShow = message.price || message;
      notify(errorShow, 'error');
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

  handleClick = (event) => {
    event.preventDefault();
    const { postDataThunkPrivate } = this.props;
    postDataThunkPrivate('menu', this.state, addMenuItem, 'post');
  }

  render() {
    return (
      <AdminComponent onChange={this.handleChange} onClick={this.handleClick}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.menuReducer.error,
    success: state.menuReducer.message,
  };
};

const actionCreators = {
  postDataThunkPrivate,
};

export default connect(mapStateToProps, actionCreators)(AdminView);
