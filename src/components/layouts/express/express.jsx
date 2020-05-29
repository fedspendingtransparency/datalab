import React from 'react';
import PropTypes from 'prop-types';
import StoryLayout from "../story/story";

export default function ExpressLayout(props) {
  return (
    <StoryLayout
      title={props.title}
      introSentence={props.introSentence}
      hwctaLink={props.hwctaLink}>
      {props.children}
    </StoryLayout>
  )
};

ExpressLayout.propTypes = {
  children: PropTypes.node.isRequired,
  introSentence: PropTypes.string.isRequired,
  hwctaLink: PropTypes.string
};
