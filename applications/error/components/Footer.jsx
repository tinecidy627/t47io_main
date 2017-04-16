import React from 'react';


const year = new Date().getFullYear();

const Footer = ({
  logo,
  copy,
  cc,
}) => (
  <footer className="FOOTER">
    <p className="FOOTER__line">
      Copyright
      <i className="fa fa-fw" dangerouslySetInnerHTML={{ __html: copy }} />
      <a className="FOOTER__year">2015 - {year}</a>
      Designed, built & managed by
      <a
        href="https://t47.io/"
        rel="noopener" className="green-white"
        dangerouslySetInnerHTML={{ __html: logo }}
      />
      . All rights reserverd.
    </p>
    <p className="FOOTER__line">
      Code and content on this site is licensed under
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode"
        target="_blank" rel="noopener noreferrer external"
      >
        <i className="fa fa-fw" dangerouslySetInnerHTML={{ __html: cc }} />
        BY-NC-SA 4.0
      </a>
      .
    </p>
  </footer>
);

Footer.propTypes = {
  logo: React.PropTypes.string,
  copy: React.PropTypes.string,
  cc: React.PropTypes.string,
};
Footer.defaultProps = {
  logo: '',
  copy: '',
  cc: '',
};


export default Footer;
