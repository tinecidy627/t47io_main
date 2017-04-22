import React from 'react';
import { connect } from 'react-redux';

import AccessSection from '../components/AccessSection.jsx';
import FeatureSection from '../components/FeatureSection.jsx';
import TitleSection from '../components/TitleSection.jsx';

const imgSpindle = require('../images/pm_spindle.jpg');


const SpindlePage = ({
  title,
  description,
  urls,
  carousels,
  lists,
}) => {
  if (!title) { return null; }

  return (
    <div className="PROJECT__body">
      <TitleSection
        title={title}
        description={description}
        image={imgSpindle}
      />
      <AccessSection
        key="top"
        urls={urls}
      />
      <FeatureSection
        project="spindle"
        carousels={carousels}
        lists={lists}
      />
      <AccessSection
        key="bottom"
        urls={urls}
      />
    </div>
  );
};

SpindlePage.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  urls: React.PropTypes.shape({
    repo: React.PropTypes.string,
  }),
  carousels: React.PropTypes.arrayOf(React.PropTypes.array),
  lists: React.PropTypes.arrayOf(React.PropTypes.object),
};
SpindlePage.defaultProps = {
  title: '',
  description: '',
  urls: {
    repo: '',
  },
  carousels: [],
  lists: [],
};


const mapStateToProps = state => (state.spindle);
const mapDispatchToProps = null;


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpindlePage);