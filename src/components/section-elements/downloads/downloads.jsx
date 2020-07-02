import React, { useState, useEffect } from 'react';
import downloadsStyles from "./downloads.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import Radium from 'radium';
import styleVariables from 'src/styles/variables.scss';
import FiscalDataLogo from 'src/svgs/powered-by-fiscal-data.svg';
import { checkScreenMode, ScreenModeEnum } from '../../../utils/screen-mode'

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

  const [screenMode, setScreenMode] = useState(0);

  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname.replace(/\//g, "");
    const index = Object.keys(inlineStyles).indexOf(pathname);

    if (index > -1) {
      selectedStyle = inlineStyles[pathname];
    }

    const resizeWindow = () => {
      const newMode = checkScreenMode(window.innerWidth);
      if (newMode !== screenMode) {
        setScreenMode(newMode);
      }
    }
  
    useEffect(() => {
      resizeWindow();
      window.addEventListener('resize', resizeWindow);
      return () => {
        window.removeEventListener('resize', resizeWindow);
      }
    }, []);
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

  const align = screenMode === ScreenModeEnum.mobile ? 'center' : 'flex-start';

  return (
    <Grid
      container
      alignItems={align}
      justify={props.justify || "flex-end"}
      direction="row"
      className={downloadsStyles.download}
      id={props.mobileSpace ? downloadsStyles.downloadMobile : ``}
    >
      {props.withFiscalDataLogo &&
        <a target="_blank" rel="noopener noreferrer" href="https://fiscaldata.treasury.gov/">
          <FiscalDataLogo className={downloadsStyles.logo} />
        </a>
      }
      <div>
        {props.date ? <span className={downloadsStyles.fadedModifier}>Updated as of {props.date} / </span> : ''}
        {props.isJSON ?
          exportToJsonFile(props.data)
          :
          <a className={downloadsStyles.data} style={selectedStyle} href={props.href}>
              <FontAwesomeIcon icon={faDownload} width={16} />
              &nbsp;Download
          </a>
        }
      </div>
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


