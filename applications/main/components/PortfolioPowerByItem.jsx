import React from 'react';
import PropTypes from 'prop-types';

import WebAnimation from '../../common/components/WebAnimation.jsx';

import { brandLogos } from './Images.js';
import { portfolioBrandItem } from '../animations/portfolio.js';


const PortfolioPowerByItem = ({
  name,
  url,
  shouldAnimate,
  index,
}) => (
  <WebAnimation
    tagName="li"
    className="PORTFOLIO__brand-item"
    keyframes={portfolioBrandItem.keyframes}
    timing={portfolioBrandItem.timing(index)}
    shouldAnimate={shouldAnimate}
    data-tip={name} data-for="PORTFOLIO__tooltip"
  >
    <a
      href={url}
      target="_blank" rel="noopener noreferrer external"
    >
      <i dangerouslySetInnerHTML={{ __html: brandLogos[name] }} />
    </a>
  </WebAnimation>
);

PortfolioPowerByItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  shouldAnimate: PropTypes.bool,
  index: PropTypes.number,
};
PortfolioPowerByItem.defaultProps = {
  name: '',
  url: '',
  shouldAnimate: false,
  index: 0,
};


export default PortfolioPowerByItem;
