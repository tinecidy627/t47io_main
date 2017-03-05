import React from 'react';


const ErrorPage = ({
  logo,
  code,
  color,
  img,
  title,
  text,
}) => (
  <div className="LOAD__container">
    <div className="LOAD__content UTIL__image-RNA">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div className="green" dangerouslySetInnerHTML={{ __html: logo }} />
        <img src={img} alt={`HTTP Error ${code}`} height="auto" />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <h2>
          <span className={`label label-${color}`} >
            {title.custom}
          </span>
        </h2>
        <p>
          <b dangerouslySetInnerHTML={{ __html: text.custom.replace(/\n/g, '<br/>') }} />
        </p>
        <p>
          <i>In other words,</i>
        </p>
        <h3>
          <span className={`label label-${color}`}>
            {code}: {title.standard}
          </span>
        </h3>
        <p dangerouslySetInnerHTML={{ __html: text.standard.replace(/\n/g, '<br/>') }} />
      </div>
    </div>
  </div>
);

ErrorPage.propTypes = {
  logo: React.PropTypes.string.isRequired,
  code: React.PropTypes.number.isRequired,
  color: React.PropTypes.oneOf(['green', 'blue', 'yellow', 'purple', 'red']).isRequired,
  img: React.PropTypes.string.isRequired,
  title: React.PropTypes.shape({
    custom: React.PropTypes.string.isRequired,
    standard: React.PropTypes.string.isRequired,
  }),
  text: React.PropTypes.shape({
    custom: React.PropTypes.string.isRequired,
    standard: React.PropTypes.string.isRequired,
  }),
};


export default ErrorPage;