import React, { Component, PropTypes } from 'react';
import Backgrounds from '../Backgrounds/Backgrounds';
import './MoreMenu.scss';
import envelopeSquare from '../../images/svg/envelope-square.svg';
import facebookOfficial from '../../images/svg/facebook-official.svg';
import github from '../../images/svg/github.svg';
import tumblr from '../../images/svg/tumblr.svg';
import twitter from '../../images/svg/twitter.svg';
import wordpress from '../../images/svg/wordpress.svg';
import ellipsisV from '../../images/svg/ellipsis-v.svg';

class MoreMenu extends Component {
  static propTypes = {
    currentSection: PropTypes.string.isRequired
  };

  state = {
    expanded: false
  };

  toggle = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { currentSection } = this.props;
    const { expanded } = this.state;

    return (
      <div className="MoreMenu">
        <button className="MoreMenu__toggler" onClick={this.toggle} aria-haspopup="true" aria-controls="MoreMenu__dropdown"><img src={ellipsisV} alt="More..." /></button>
        <div id="MoreMenu__dropdown" className={`MoreMenu__dropdown ${expanded ? 'MoreMenu__dropdown--expanded' : ''}`} aria-hidden={!expanded} aria-label="submenu">
          <div className="MoreMenu__backgrounds">
            <Backgrounds currentSection={currentSection} />
          </div>
          <ul className="MoreMenu__list">
            <li className="MoreMenu__item MoreMenu__item--mobile">
              <a href="https://twitter.com/JeffreyATW"><img src={twitter} alt="Twitter" /></a>
            </li>
            <li className="MoreMenu__item MoreMenu__item--mobile">
              <a href="http://jeffreyatw.tumblr.com/"><img src={tumblr} alt="Tumblr" /></a>
            </li>
            <li className="MoreMenu__item MoreMenu__item--mobile">
              <a href="https://www.facebook.com/jeffreyatw"><img src={facebookOfficial} alt="Facebook" /></a>
            </li>
            <li className="MoreMenu__item MoreMenu__item--mobile">
              <a href="https://github.com/JeffreyATW"><img src={github} alt="GitHub" /></a>
            </li>
            <li className="MoreMenu__item MoreMenu__item--mobile">
              <a href="http://jeffreyatw.com/blog"><img src={wordpress} alt="Blog" /></a>
            </li>
            <li className="MoreMenu__item MoreMenu__item--mobile">
              <a href="mailto:jeffreyatw@gmail.com"><img src={envelopeSquare} alt="Email" /></a>
            </li>
            <li>
              <h2 className="MoreMenu__heading">Previous Site Versions</h2>
              <ol className="MoreMenu__versions">
                <li>
                  <a href="http://sentra.tripod.com">1</a> (2001)
                </li>
                <li>
                  <a href="/index_v2.shtml">2</a> (2002)
                </li>
                <li>
                  <a href="/index_v3.shtml">3</a> (2002)
                </li>
                <li>
                  <a href="/index_v4.shtml">4</a> (2002)
                </li>
                <li>
                  <a href="/index_v5.shtml">5</a> (2005)
                </li>
                <li>
                  <a href="/index_v6.shtml">6</a> (2003)
                </li>
                <li>
                  <a href="http://www.livejournal.com/customview.cgi?styleid=419413&amp;user=jeffreyatw">7</a> (2004)
                </li>
                <li>
                  <a href="http://www.livejournal.com/customview.cgi?styleid=481429&amp;user=jeffreyatw">8</a> (2004)
                </li>
                <li>
                  <a href="http://www.livejournal.com/customview.cgi?styleid=497465&amp;user=jeffreyatw">9</a> (2004)
                </li>
                <li>
                  <a href="http://www.livejournal.com/customview.cgi?styleid=565270&amp;user=jeffreyatw">10</a> (2005)
                </li>
                <li>
                  <a href="/v11/">11</a> (2005)
                </li>
                <li>
                  <a href="/v12/">12</a> (2007)
                </li>
                <li>
                  <a href="/v13/">13</a> (2010)
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MoreMenu;