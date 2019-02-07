import React, { Component } from 'react';
import NavBar from './utils/NavBar';
import './sass/dashboard.scss';
import InputField from './utils/InputField';
import SignupButton from './utils/SignupButton';

class AdminComponent extends Component {
  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.modal');
      const options = {};
      const instances = M.Modal.init(elems, options);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const { onChange, onClick } = this.props;
    return (
      <div>
        <NavBar item1="Home" item2="Logout" item3="About" url1="/" url2="/login" url3="#" />
        <div className="container dashboard">
          <div className="z-depth-3">
            <h4 className="container table-header">Fast-Food-Fast Menu</h4>
            <table className="striped centered menu-table">
              <thead>
                <tr>
                  <th>Food Name</th>
                  <th>Item Price (shs)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </table>
            <a className="btn-floating btn-large waves-effect waves-light btn modal-trigger click-add" href="#modal1"><i className="material-icons">add</i></a>
            <div id="modal1" className="modal add-form s12 m4 l3">
              <div className="modal-content">
                <h4>New food item</h4>
                <form>
                  <InputField item="item" onChange={onChange}/>
                  <InputField item="price" onChange={onChange}/>
                  <SignupButton name="Add" onClick={onClick}/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminComponent;
