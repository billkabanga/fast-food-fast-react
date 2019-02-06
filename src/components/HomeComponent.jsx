import React from 'react';
import './sass/home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Fast-Food-Fast</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/signup">SignUp</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </nav>
      <div className="container home-body">
        <h1>Welcome to fast food fast...</h1>
        <h6>For food delivery service at your convenience.
        Place your order now and get served instantly.</h6>
      </div>
    </div>
  );
};

export default Home;
