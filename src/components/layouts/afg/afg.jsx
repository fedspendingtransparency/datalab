import React from 'react';
import PropTypes from 'prop-types';

import Default from '../default/default';
import { AFGHeader } from '../../headers/headers';
import MoreAnalyses from '../../more-analyses/more-analyses';

import './afg.module.scss';
import '../../../styles/index.scss';
import AfgNav from '../../afg-nav/afg-nav';

const AfgLayout = ({ location, chapter, children }) => (
  <Default>
    <AFGHeader />
    <AfgNav location={location} chapter={chapter} />
    <div className="cg-wrapper debt-analysis-wrapper">
      <div className="ffg-wrapper debt-analysis">
        {children}
        <MoreAnalyses afg />
      </div>
    </div>
  </Default>
);

export default AfgLayout;

AfgLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
