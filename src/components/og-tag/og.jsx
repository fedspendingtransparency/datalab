import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const origin = typeof window !== 'undefined' ? window.location.origin : '';

export default class Og extends React.Component {
    constructor(props) {
        super(props);
    };

  render() {
    if (typeof window !== undefined) {
      return (
        <Helmet>
          <meta property="og:image" content={origin + this.props.socialMediaImage} />
        </Helmet>
      );
    }
  };
};

Og.propTypes = {
    socialMediaImage: PropTypes.string.isRequired,
};
