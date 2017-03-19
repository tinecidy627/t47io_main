import React from 'react';

import WebAnimation from '../../common/components/WebAnimation.jsx';
import Trigger from '../../common/components/Trigger.jsx';

import { contactList } from '../animations/contact.js';

const imgPhone = require('../images/t47_phone.png');


const ContactList = ({
  resume,
  counter,
  onToggleAnimation,
}) => {
  const date = resume.slice(7, -4);
  const objDate = new Date(`${date.slice(4, 6)}/01/${date.slice(0, 4)}`);

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <Trigger onToggleAnimation={onToggleAnimation} />
      <WebAnimation
        tagName="h4"
        className="CONTACT__title CONTACT__list-item"
        keyframes={contactList.keyframes}
        timing={contactList.timing(0)}
        shouldAnimate={counter}
      >
        <i className="fa fa-street-view fa-lg fa-fw" />
        Find Me
      </WebAnimation>
      <ul className="CONTACT__address">
        <WebAnimation
          tagName="li"
          className="CONTACT__list-item"
          keyframes={contactList.keyframes}
          timing={contactList.timing(1)}
          shouldAnimate={counter}
          style={{ paddingBottom: '0.8em' }}
        >
          <i className="fa fa-location fa-lg fa-fw" />
          279 Campus Drive West, Room B419
        </WebAnimation>
        <WebAnimation
          tagName="li"
          className="CONTACT__list-item"
          keyframes={contactList.keyframes}
          timing={contactList.timing(2)}
          shouldAnimate={counter}
        >
          <i className="fa fa-location fa-lg fa-fw" style={{ visibility: 'hidden' }} />
          Stanford, CA 94305, USA
        </WebAnimation>
        <WebAnimation
          tagName="li"
          className="CONTACT__list-item"
          keyframes={contactList.keyframes}
          timing={contactList.timing(3)}
          shouldAnimate={counter}
        >
          <i className="fa fa-phone fa-lg fa-fw" />
          <img
            className="CONTACT__phone"
            alt="T47 phone no."
            src={imgPhone}
          />
        </WebAnimation>
        <WebAnimation
          tagName="li"
          className="CONTACT__list-item"
          keyframes={contactList.keyframes}
          timing={contactList.timing(4)}
          shouldAnimate={counter}
          style={{ paddingBottom: '0.8em' }}
        >
          <i className="fa fa-mail-alt fa-lg fa-fw" />
          <b>
            <a
              className="text-light-green"
              href="mailto:t47@alumni.stanford.edu"
              target="_blank" rel="noopener noreferrer external"
            >
              t47 @ alumni.stanford.edu
            </a>
          </b>
        </WebAnimation>
        <WebAnimation
          tagName="li"
          className="CONTACT__list-item"
          keyframes={contactList.keyframes}
          timing={contactList.timing(5)}
          shouldAnimate={counter}
        >
          <i className="fa fa-mail-alt fa-lg fa-fw" style={{ visibility: 'hidden' }} />
          <a
            className="text-light-gray"
            href="mailto:contact@t47.io"
            target="_blank" rel="noopener noreferrer external"
          >
            contact @ t47.io
          </a>
        </WebAnimation>
        <WebAnimation
          tagName="li"
          className="CONTACT__list-item"
          keyframes={contactList.keyframes}
          timing={contactList.timing(6)}
          shouldAnimate={counter}
        >
          <a
            className="btn btn-default"
            href="/resume/"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fa fa-download fa-fw" />
            Resume
            <span className="text-main CONTACT__resume">
              <i className="fa fa-clock fa-fw" style={{ marginRight: 0 }} />
              <small>
                {objDate.toLocaleString('en-us', { month: 'short', year: 'numeric' })}
              </small>
            </span>
          </a>
        </WebAnimation>
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  resume: React.PropTypes.string,
  counter: React.PropTypes.bool,
  onToggleAnimation: React.PropTypes.func,
};
ContactList.defaultProps = {
  resume: '',
  counter: false,
  onToggleAnimation: () => {},
};


export default ContactList;
