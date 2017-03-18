import React from 'react';

import Trigger from '../../common/components/Trigger.jsx';
import SectionHeader from '../../common/components/SectionHeader.jsx';
import Carousel from '../../common/components/Carousel.jsx';
import ContactItem from '../components/ContactItem.jsx';
import ContactList from '../components/ContactList.jsx';
import ContactForm from '../components/ContactForm.jsx';

import '../stylesheets/ContactSection.scss';


const ContactSection = ({
  data: {
    items = [],
    background = [],
    resume = '',
    lens = {},
  },
  form: {
    name = '',
    email = '',
    subject = '',
    message = '',
    isPending = false,
    isSuccess = false,
    isError = false,
  },
  animations: {
    header = true,
    icon = items.length,
    left = lens.left,
    right = lens.right,
  },
  actions: {
    animateHeader = () => {},
    animateIcons = () => {},
    animateLeftItems = () => {},
    animateRightItems = () => {},
    changeEmailField = () => {},
    submitEmail = () => {},
  },
}) => (
  <section id="CONTACT__section" className="text-white">
    <Carousel
      extraClassName="long"
      items={background}
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
              shouldAnimate={i < icon}
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
            counter={left}
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
  data: React.PropTypes.shape({
    items: React.PropTypes.array,
    background: React.PropTypes.array,
    resume: React.PropTypes.string,
    lens: React.PropTypes.shape({
      left: React.PropTypes.number,
      right: React.PropTypes.number,
    }),
  }),
  form: React.PropTypes.shape({
    name: React.PropTypes.string,
    email: React.PropTypes.string,
    subject: React.PropTypes.string,
    message: React.PropTypes.string,
    isPending: React.PropTypes.bool,
    isSuccess: React.PropTypes.bool,
    isError: React.PropTypes.bool,
  }),
  animations: React.PropTypes.shape({
    header: React.PropTypes.bool,
    icon: React.PropTypes.number,
    left: React.PropTypes.number,
    right: React.PropTypes.number,
  }),
  actions: React.PropTypes.shape({
    animateHeader: React.PropTypes.func,
    animateIcons: React.PropTypes.func,
    animateLeftItems: React.PropTypes.func,
    animateRightItems: React.PropTypes.func,
    changeEmailField: React.PropTypes.func,
    submitEmail: React.PropTypes.func,
  }),
};


export default ContactSection;
