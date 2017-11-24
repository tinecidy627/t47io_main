import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Carousel from '../components/Carousel.jsx';
import ContactForm from '../components/ContactForm.jsx';
import ContactItem from '../components/ContactItem.jsx';
import ContactList from '../components/ContactList.jsx';
import SectionHeader from '../../common/components/SectionHeader.jsx';
import Trigger from '../../common/components/Trigger.jsx';

import * as contactActions from '../actions/contactActions.js';
import { initialState as contactProps } from '../reducers/contact.js';
import { CONTACT } from '../constants/sectionTypes.js';

import '../stylesheets/ContactSection.scss';


const ContactSection = ({
  data: {
    items,
    backgrounds,
    resume,
  },
  form: {
    name,
    email,
    subject,
    message,
    isPending,
    isSuccess,
    isError,
  },
  animations: {
    header,
    icon,
    left,
    right,
    audio,
  },
  actions: {
    animateHeader,
    animateIcons,
    animateLeftItems,
    animateRightItems,
    changeEmailField,
    submitEmail,
    playAudio,
  },
}) => (
  <section id="CONTACT__section" className="text-white">
    <Carousel
      className="long"
      items={backgrounds}
      interval={4000}
    >
      <div className="UTIL__spacer-lg" />
      <SectionHeader
        title="contact me"
        subtitle="let's chat"
        shouldAnimate={header}
        onToggleAnimation={animateHeader}
      />

      <div className="container">
        <Trigger onToggleAnimation={animateIcons} />
        <ul className="CONTACT__social">
          {items.map((item, i) => (
            <ContactItem
              key={`CONTACT__icon-${i}`}
              shouldAnimate={icon}
              index={i}
              {...item}
            />
          ))}
        </ul>
      </div>
      <div className="UTIL__spacer-lg" />

      <div className="container">
        <div className="row">
          <ContactList
            resume={resume}
            audio={audio}
            counter={left}
            onToggleAudio={playAudio}
            onToggleAnimation={animateLeftItems}
          />
          <ContactForm
            name={name}
            email={email}
            subject={subject}
            message={message}
            isPending={isPending}
            isSuccess={isSuccess}
            isError={isError}
            counter={right}
            onChangeField={changeEmailField}
            onSubmitForm={submitEmail}
            onToggleAnimation={animateRightItems}
          />
        </div>
      </div>
    </Carousel>
  </section>
);

ContactSection.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object),
    backgrounds: PropTypes.arrayOf(PropTypes.string),
    resume: PropTypes.string,
  }),
  form: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    subject: PropTypes.string,
    message: PropTypes.string,
    isPending: PropTypes.bool,
    isSuccess: PropTypes.bool,
    isError: PropTypes.bool,
  }),
  animations: PropTypes.shape({
    header: PropTypes.bool,
    icon: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    audio: PropTypes.bool,
  }),
  actions: PropTypes.shape({
    animateHeader: PropTypes.func,
    animateIcons: PropTypes.func,
    animateLeftItems: PropTypes.func,
    animateRightItems: PropTypes.func,
    changeEmailField: PropTypes.func,
    submitEmail: PropTypes.func,
    playAudio: PropTypes.func,
  }),
};
ContactSection.defaultProps = {
  ...contactProps,
  actions: {
    animateHeader: () => {},
    animateIcons: () => {},
    animateLeftItems: () => {},
    animateRightItems: () => {},
    changeEmailField: () => {},
    submitEmail: () => {},
    playAudio: () => {},
  },
};


const mapStateToProps = state => (state[CONTACT]);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(contactActions, dispatch),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactSection);
