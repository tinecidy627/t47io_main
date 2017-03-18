import React from 'react';
import Animation from './Animation.jsx';
import Scrollspy from './Scrollspy.jsx';

import '../stylesheets/SectionHeader.scss';


const SectionHeader = ({
  title = '',
  subtitle = '',
  shouldAnimate = true,
  onToggleAnimation = () => {},
}) => (
  <div className="UTIL__section_header">
    <Scrollspy onToggleAnimation={onToggleAnimation} />
    <Animation shouldAnimate={shouldAnimate}>
      <h2>{title}</h2>
      <div className="UTIL__divider" />
      <p className="UTIL__section_subtitle">
        {subtitle}
      </p>
    </Animation>
  </div>
);

SectionHeader.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  shouldAnimate: React.PropTypes.bool,
  onToggleAnimation: React.PropTypes.func,
};


export default SectionHeader;
