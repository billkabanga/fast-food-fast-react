import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientComponent from '../components/ClientComponent';
import { getDataThunkPublic } from '../redux/thunks';
import { getMenu } from '../redux/actions/MenuActions';

class ClientView extends Component {
  componentDidMount() {
    const { getDataThunkPublic } = this.props;
    getDataThunkPublic('menu', getMenu);
  }

  render() {
    const { menu } = this.props;
    return (
      <ClientComponent menu={menu} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.menuReducer.menu,
  };
};

const actionCreators = {
  getDataThunkPublic,
};

export default connect(mapStateToProps, actionCreators)(ClientView);
