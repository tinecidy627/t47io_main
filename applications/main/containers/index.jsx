import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Waypoint from 'react-waypoint';

import HomeSection from './HomeSection.jsx';
import AboutSection from './AboutSection.jsx';
import AffiliationSection from './AffiliationSection.jsx';
import PortfolioSection from './PortfolioSection.jsx';
import SkillsSection from './SkillsSection.jsx';
import StatsSection from './StatsSection.jsx';
import PubsSection from './PubsSection.jsx';
import ContactSection from './ContactSection.jsx';

import Navbar from '../../common/components/Navbar.jsx';
import Footer from '../../common/components/Footer.jsx';
import ScrollTop from '../../common/components/ScrollTop.jsx';

import * as homeActions from '../actions/homeActions.js';
import * as aboutActions from '../actions/aboutActions.js';
import * as affiliationActions from '../actions/affiliationActions.js';
import * as portfolioActions from '../actions/portfolioActions.js';
import * as skillsActions from '../actions/skillsActions.js';
import * as statsActions from '../actions/statsActions.js';
import * as pubsActions from '../actions/pubsActions.js';
import * as contactActions from '../actions/contactActions.js';

import '../stylesheets/index.scss';


const mapStateToProps = (state) => {
  const props = {
    data: {},
    animation: {},
  };
  Object.keys(state).forEach((key) => {
    props.data[key] = state[key].data;
    props.animation[key] = state[key].animation;
  });
  return props;
};
const mapDispatchToProps = dispatch => ({
  actions: {
    home: bindActionCreators(homeActions, dispatch),
    about: bindActionCreators(aboutActions, dispatch),
    affiliation: bindActionCreators(affiliationActions, dispatch),
    portfolio: bindActionCreators(portfolioActions, dispatch),
    skills: bindActionCreators(skillsActions, dispatch),
    stats: bindActionCreators(statsActions, dispatch),
    pubs: bindActionCreators(pubsActions, dispatch),
    contact: bindActionCreators(contactActions, dispatch),
  },
});


class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setState({
      scroll: {
        section: 'home',
        top: true,
        bottom: false,
      },
    });

    this.onEnterSection = this.onEnterSection.bind(this);
    this.onScrollNavbar = this.onScrollNavbar.bind(this);
    this.onScrollFooter = this.onScrollFooter.bind(this);
  }

  componentDidMount() {
    this.props.actions.home.loadJsonData();
  }

  onEnterSection(section) {
    this.setState({
      scroll: {
        ...(this.state.scroll),
        section,
      },
    });
  }
  onScrollNavbar({ currentPosition }) {
    this.setState({
      scroll: {
        ...(this.state.scroll),
        top: currentPosition === 'inside',
      },
    });
  }
  onScrollFooter({ currentPosition }) {
    this.setState({
      scroll: {
        ...(this.state.scroll),
        bottom: currentPosition === 'inside',
      },
    });
  }

  render() {
    const { data, animation, actions } = this.props;
    const { home, about, affiliation, portfolio, skills, stats, pubs, contact } = data;
    const { scroll } = this.state;

    return (
      <div>
        <Navbar items={home.sections} {...scroll} />

        <Waypoint onEnter={() => this.onEnterSection('home')} />
        <HomeSection {...home} />

        <Waypoint onEnter={() => this.onEnterSection('about')} />
        <Waypoint topOffset="200px" onPositionChange={this.onScrollNavbar} />
        <AboutSection
          data={data.about}
          animation={animation.about}
          actions={actions.about}
        />
        {/*<AffiliationSection {...affiliation} />*/}

        <Waypoint onEnter={() => this.onEnterSection('portfolio')} />
        <PortfolioSection {...portfolio} />
        <SkillsSection {...skills} />
        <StatsSection {...stats} />
        <PubsSection {...pubs} />

        <Waypoint onEnter={() => this.onEnterSection('contact')} />
        <ContactSection {...contact} />

        <Waypoint onPositionChange={this.onScrollFooter} />
        <Footer />
        <ScrollTop {...scroll} />
      </div>
    );
  }
}
Main.propTypes = {
  home: React.PropTypes.object,
  about: React.PropTypes.object,
  affiliation: React.PropTypes.object,
  portfolio: React.PropTypes.object,
  skills: React.PropTypes.object,
  stats: React.PropTypes.object,
  pubs: React.PropTypes.object,
  contact: React.PropTypes.object,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);