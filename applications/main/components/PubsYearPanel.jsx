import React from 'react';

import PubsItem from './PubsItem.jsx';
import WebAnimation from '../../common/components/WebAnimation.jsx';

import { pubsYear } from '../animations/pubs.js';


const PubsYearPanel = ({
  year,
  items,
  counter,
  offset,
}) => (
  <div className="row PUBS__row">
    <WebAnimation
      className="col-lg-1 col-md-1 col-sm-2 col-xs-3 PUBS__year"
      keyframes={pubsYear.keyframes}
      timing={pubsYear.timing(offset)}
      shouldAnimate={counter}
    >
      {year}
    </WebAnimation>
    <div className="col-lg-11 col-md-11 col-sm-10 col-xs-9 PUBS__content">
      {items.filter(item => (!item.isHidden))
        .map((item, i) => (
          <PubsItem
            key={`PUBS__entry-${year}-${i}`}
            year={year}
            shouldAnimate={counter}
            index={offset + i}
            {...item}
          />
        )
      )}
    </div>
  </div>
);

PubsYearPanel.propTypes = {
  year: React.PropTypes.number,
  items: React.PropTypes.arrayOf(React.PropTypes.object),
  counter: React.PropTypes.bool,
  offset: React.PropTypes.number,
};
PubsYearPanel.defaultProps = {
  year: NaN,
  items: [],
  counter: false,
  offset: 0,
};


export default PubsYearPanel;
