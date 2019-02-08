import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'msg-notify/dist/notify.css';
import notify from 'msg-notify';
import PropTypes from 'prop-types';
import AdminComponent from '../components/AdminComponent';
import { postDataThunkPrivate, getDataThunkPublic } from '../redux/thunks';
import { addMenuItem, getMenu } from '../redux/actions/MenuActions';


export class AdminView extends Component {
  state = {
    item: '',
    price: '',
    success: '',
    error: '',
  }

  componentDidMount() {
    const { getDataThunkPublic } = this.props;
    getDataThunkPublic('menu', getMenu);
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
      window.location.reload();
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
    const { menu } = this.props;
    return (
      <AdminComponent onChange={this.handleChange} onClick={this.handleClick} menu={menu}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.menuReducer.error,
    success: state.menuReducer.message,
    menu: state.menuReducer.menu,
  };
};

const actionCreators = {
  postDataThunkPrivate,
  getDataThunkPublic,
};

AdminView.propTypes = {
  getDataThunkPrivate: PropTypes.func,
  postDataThunkPrivate: PropTypes.func,
};

export default connect(mapStateToProps, actionCreators)(AdminView);
