import React from 'react';
import TagLineMobile from "../../../svgs/logo-tablet-mobile.svg";
import NoTagLine from "../../../svgs/Logo-without-tagline.svg";
import TagLine from "../../../svgs/Logo-with-tagline.svg";

export default function HeaderLogo(props) {
  if (props.isMobileTag) {
    return <TagLineMobile data-testid={'taglineMobile'} />;
  } else {
    if (props.isSticky) {
      return <NoTagLine data-testid={'noTagLine'} />;
    }
    return <TagLine width="100%" data-testid={'tagLine'}/>;
  }
};