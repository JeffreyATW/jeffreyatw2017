import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sections } from '../../constants';
import './Backgrounds.scss';

class Backgrounds extends Component {
  static propTypes = {
    currentSection: PropTypes.number.isRequired
  };

  render() {
    const { currentSection } = this.props;

    return (
      <div className="Backgrounds">
        {sections.map((section, i) => (
          <div className={`Backgrounds__background Backgrounds__background--${section} ${currentSection >= i ? 'Backgrounds__background--active' : ''}`} key={i} />
        ))}
      </div>
    );
  }
}

export default Backgrounds;
