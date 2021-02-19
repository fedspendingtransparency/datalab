import '../../../styles/index.scss';
import React from 'react';
import PropTypes from 'prop-types';

import OfficialBanner from '../../headers/official-banner';
import PageFooter from '../../footers/page';
import SiteFooter from '../../footers/site';

const Default = ({ children }) => (
  <>
    <OfficialBanner />
    {children}

    <PageFooter />
    <SiteFooter />
  </>
);

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default;