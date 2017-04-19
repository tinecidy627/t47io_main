import React from 'react';
import { connect } from 'react-redux';

import FeatureSection from '../components/FeatureSection.jsx';
import TitleSection from '../components/TitleSection.jsx';

const imgCelica = require('../images/pm_celica.jpg');


const CelicaPage = ({
  project,
  title,
  description,
  carousels,
  lists,
  subtitles,
}) => {
  if (!title || carousels.length !== 3 || lists.length !== 3) {
    return null;
  }

  return (
    <div className="PROJECT__body">
      <TitleSection
        title={title}
        description={description}
        image={imgCelica}
      />
      <FeatureSection
        project={project}
        title={subtitles.story.title}
        icon={subtitles.story.icon}
        carousels={carousels}
        lists={lists}
      />
    </div>
  );
};

CelicaPage.propTypes = {
  project: React.PropTypes.string,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  carousels: React.PropTypes.arrayOf(React.PropTypes.array),
  lists: React.PropTypes.arrayOf(React.PropTypes.object),
  subtitles: React.PropTypes.shape({
    story: React.PropTypes.shape({
      title: React.PropTypes.string,
      icon: React.PropTypes.string,
    }),
  }),
};
CelicaPage.defaultProps = {
  project: '',
  title: '',
  description: '',
  carousels: [],
  lists: [],
  subtitles: {
    story: {
      title: '',
      icon: '',
    },
  },
};


const mapStateToProps = state => ({
  ...state.celica,
  subtitles: state.subtitles,
});
const mapDispatchToProps = null;


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CelicaPage);
