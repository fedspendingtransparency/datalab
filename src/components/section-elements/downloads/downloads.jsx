import React from 'react';
import downloadsStyles from "./downloads.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import Radium from 'radium';
import styleVariables from 'src/styles/variables.scss';

const Downloads = (props) => {
  const inlineStyles = {
    legacy: {
      ':hover': {
        color: styleVariables.legacyBlue
      }
    },
    'colleges-and-universities': {
      ':hover': {
        color: styleVariables.cuRed
      }
    },
    'competition-in-contracting': {
      ':hover': {
        color: styleVariables.dlExpressBlue
      }
    },
    'rd-in-contracting': {
      ':hover': {
        color: styleVariables.rdBlue
      }
    },
    'analyst-guide': {
      ':hover': {
        color: styleVariables.analystGuideBlue
      }
    },
    'student-innovators-toolbox': {
      ':hover': {
        color: styleVariables.studentToolboxBlue
      }
    },
    'federal-covid-spending': {
      ':hover': {
        color: styleVariables.covidPurple
      }
    }
  };

  let selectedStyle = inlineStyles.legacy;

  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname.replace(/\//g, "");
    const index = Object.keys(inlineStyles).indexOf(pathname);

    if (index > -1) {
      selectedStyle = inlineStyles[pathname];
    }
  }

  function exportToJsonFile(jsonData) {
    if (typeof Blob === 'undefined') {
      return <></>;
    }

    const dataStr = JSON.stringify(jsonData);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const dataUri = URL.createObjectURL(dataBlob);
    const exportFileDefaultName = 'data.json';

    return (
      <a className={downloadsStyles.data} href={dataUri} download={exportFileDefaultName}>
        <FontAwesomeIcon icon={faDownload} width={16} />
        &nbsp;Download
      </a>
    );
  }

  return (
    <Grid
      container
      alignItems="flex-start"
      justify={props.justify || "flex-end"}
      direction="row"
      className={downloadsStyles.download}
      id={props.mobileSpace ? downloadsStyles.downloadMobile : ``}
    >
      {props.date ? <span className={downloadsStyles.fadedModifier}>Updated as of {props.date} / </span> : ''}
      {props.isJSON ?
        exportToJsonFile(props.data)
        :
       <a className={downloadsStyles.data} style={selectedStyle} href={props.href}>
          <FontAwesomeIcon icon={faDownload} width={16} />
          &nbsp;Download
       </a>
      }
    </Grid>
  );
};

Downloads.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  date: PropTypes.string,
  href: PropTypes.string,
  mobileSpace: PropTypes.boolean
};

const StyledDownloads = Radium(Downloads);

export default StyledDownloads;


