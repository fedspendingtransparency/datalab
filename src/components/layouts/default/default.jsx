import '../../../styles/index.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import OfficialBanner from '../../headers/official-banner';
import PageFooter from '../../footers/page';
import SiteFooter from '../../footers/site';

import '../../../styles/index.scss';


const Default = ({ children }) => (
  <>
    <Helmet>
      <title>Data Lab - U.S. Treasury</title>
    </Helmet>

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