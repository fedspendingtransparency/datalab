import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export default class Og extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Helmet>
                <meta property="og:image" content={this.props.socialMediaImage} />
            </Helmet>
        )
    }
};

Og.propTypes = {
    socialMediaShare: PropTypes.string.isRequired,
}