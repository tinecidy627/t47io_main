import React from 'react';

import PubsLink from './PubsLink.jsx';
import PubsTitle from './PubsTitle.jsx';


const PubsThesis = ({
  title,
  url,
  links,
}) => (
  <div className="row PUBS__entry PUBS__thesis">
    <div className="col-lg-1 col-md-1 hidden-sm hidden-xs" />
    <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 PUBS__text">
      <h5 className="PUBS__find-more text-center">
        <span className="fa-stack">
          <i className="fa fa-fw fa-blank fa-stack-2x text-main-light" />
          <i className="fa fa-fw fa-graduation-cap fa-stack-1x text-white" />
        </span>
        Ph.D. Dissertation
      </h5>
      <h3 className="PUBS__thesis-title">
        <PubsTitle title={title} />
        <a
          href={url}
          target="_blank" rel="noopener noreferrer external"
        >
          <i className="fa fa-fw fa-sm fa-link-ext" />
        </a>
      </h3>
      <p className="PUBS__issue">
        <b>Siqi Tian</b>
        <span> (</span>
        <b className="text-main-light">Dec 2016</b>
        <span>) </span>
      </p>
      <p className="PUBS__issue">
        Department of Biochemistry, Stanford University
      </p>
      <p className="PUBS__thesis-links">
        {links.map(link => (
          <PubsLink
            url={`/phd/${link.tag}`}
            icon={link.icon}
            size={link.size}
            data-tip={link.title}
            data-for="PUBS__tooltip"
          />
        ))}
      </p>
    </div>
    <div className="col-lg-1 col-md-1 hidden-sm hidden-xs" />
  </div>
);

PubsThesis.propTypes = {
  title: React.PropTypes.string,
  url: React.PropTypes.string,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    tag: React.PropTypes.string,
    icon: React.PropTypes.string,
    size: React.PropTypes.string,
  })),
};
PubsThesis.defaultProps = {
  title: '',
  url: '',
  links: [],
};


export default PubsThesis;
