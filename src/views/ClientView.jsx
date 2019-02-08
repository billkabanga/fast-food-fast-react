import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'msg-notify/dist/notify.css';
import notify from 'msg-notify';
import ClientComponent from '../components/ClientComponent';
import { getDataThunkPublic, postDataThunkPrivate } from '../redux/thunks';
import { getMenu } from '../redux/actions/MenuActions';
import placeOrder from '../redux/actions/OrderActions';

export class ClientView extends Component {
  state = {
    item: '',
    quantity: '',
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
    console.log(this.state)
  }

  handleClick = (event) => {
    event.preventDefault();
    const { postDataThunkPrivate } = this.props;
    postDataThunkPrivate('users/orders', this.state, placeOrder, 'post');
  }

  render() {
    const { menu } = this.props;
    return (
      <ClientComponent menu={menu} onChange={this.handleChange} onClick={this.handleClick}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.orderReducer.error,
    success: state.orderReducer.message,
    menu: state.menuReducer.menu,
  };
};

const actionCreators = {
  getDataThunkPublic,
  postDataThunkPrivate,
};

export default connect(mapStateToProps, actionCreators)(ClientView);
