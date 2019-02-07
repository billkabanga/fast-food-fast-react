import React from 'react';
import PopTypes from 'prop-types';

const NavBar = ({
  item1, item2, item3, url1, url2, url3,
}) => {
  return (
    <div className="col s12 m6 l3">
      <nav>
        <div className="nav-wrapper col s12 m6 l3">
          <a href="#" className="brand-logo col s12 m6 l3">Fast-Food-Fast</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href={url1}>{item1}</a></li>
            <li><a href={url2}>{item2}</a></li>
            <li><a href={url3}>{item3}</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  item1: PopTypes.string.isRequired,
  item2: PopTypes.string.isRequired,
  item3: PopTypes.string.isRequired,
  url1: PopTypes.string.isRequired,
  url2: PopTypes.string.isRequired,
  url3: PopTypes.string.isRequired,
};

export default NavBar;
