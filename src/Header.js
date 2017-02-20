import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1 className="Header__heading">JeffreyATW</h1>
        <ul className="Header__links">
          <li>
            <a href="https://twitter.com/JeffreyATW">Twitter</a>
          </li>
          <li>
            <a href="http://jeffreyatw.tumblr.com/">Tumblr</a>
          </li>
          <li>
            <a href="https://www.facebook.com/jeffreyatw">Facebook</a>
          </li>
          <li>
            <a href="https://github.com/JeffreyATW">GitHub</a>
          </li>
          <li>
            <a href="http://jeffreyatw.com/blog">Blog</a>
          </li>
          <li>
            <a href="#">More...</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
