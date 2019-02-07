import React from 'react';
import './sass/home.scss';
import NavBar from './utils/NavBar';

const Home = () => {
  return (
    <div className="home-page">
      <NavBar item1="Signup" item2="Login" item3="About" url1="/signup" url2="/login" url3="#" />
      <div className="container home-body">
        <h1>Welcome to fast food fast...</h1>
        <h6>For food delivery service at your convenience.
        Place your order now and get served instantly.</h6>
      </div>
    </div>
  );
};

export default Home;
