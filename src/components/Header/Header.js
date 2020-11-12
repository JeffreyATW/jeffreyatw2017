import React, { Component } from "react";
import PropTypes from "prop-types";
import Backgrounds from "../Backgrounds/Backgrounds";
import MoreMenu from "../MoreMenu/MoreMenu";
import envelopeSquare from "../../images/svg/envelope-square.svg";
import facebookOfficial from "../../images/svg/facebook-official.svg";
import github from "../../images/svg/github.svg";
import twitch from "../../images/svg/twitch.svg";
import twitter from "../../images/svg/twitter.svg";
import wordpress from "../../images/svg/wordpress.svg";
import "./Header.scss";

class Header extends Component {
  static propTypes = {
    currentSection: PropTypes.number.isRequired,
  };

  render() {
    const { currentSection } = this.props;

    return (
      <header className="Header">
        <div className="Header__backgrounds">
          <Backgrounds currentSection={currentSection} />
        </div>
        <h1 className="Header__heading">JeffreyATW</h1>
        <ul className="Header__links">
          <li className="Header__link Header__link--no-mobile">
            <a href="https://twitter.com/JeffreyATW">
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
          <li className="Header__link Header__link--no-mobile">
            <a href="https://www.facebook.com/jeffreyatw">
              <img src={facebookOfficial} alt="Facebook" />
            </a>
          </li>
          <li className="Header__link Header__link--no-mobile">
            <a href="https://twitch.tv/jeffreyatw">
              <img src={twitch} alt="Twitch" />
            </a>
          </li>
          <li className="Header__link Header__link--no-mobile">
            <a href="https://github.com/JeffreyATW">
              <img src={github} alt="GitHub" />
            </a>
          </li>
          <li className="Header__link Header__link--no-mobile">
            <a href="http://jeffreyatw.com/blog">
              <img src={wordpress} alt="Blog" />
            </a>
          </li>
          <li className="Header__link Header__link--no-mobile">
            <a href="mailto:jeffreyatw@gmail.com">
              <img src={envelopeSquare} alt="Email" />
            </a>
          </li>
          <li className="Header__link">
            <MoreMenu currentSection={currentSection} />
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
