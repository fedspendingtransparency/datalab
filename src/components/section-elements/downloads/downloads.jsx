import React from 'react';
import downloadsStyles from "./downloads.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Grid, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles"
import PropTypes from "prop-types";
import Radium from 'radium';
import styleVariables from 'src/styles/variables.scss';
import pageColorMap from '../../../utils/page-color';

const Downloads = (props) => {
  let fillColor = styleVariables.legacy;
  
  if (typeof window !== 'undefined') {
    if (pageColorMap[window.location.pathname]) {
      fillColor = pageColorMap[window.location.pathname];
    }
  }

  const DownloadsContainer = withStyles(() => ({
    'root': {
      padding: 0,
      margin: 0,
      width: 'max-content',
      '&:hover': {
        '& *': {
          color: fillColor
        }
      },
      '& a': {
        '&:focus': {
          '& *': {
            color: fillColor
          }
        }
      }
    }
  }))(Container)

  function exportToJsonFile(jsonData) {
    if (typeof Blob === 'undefined') {
      return <></>;
    }

    const dataStr = JSON.stringify(jsonData);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const dataUri = URL.createObjectURL(dataBlob);
    const exportFileDefaultName = 'data.json';

    return (
      <DownloadsContainer>
        <a className={downloadsStyles.data} href={dataUri} download={exportFileDefaultName}>
          <FontAwesomeIcon icon={faDownload} width={16} />
          <div>&nbsp;Download</div>
        </a>
      </DownloadsContainer>
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
        <DownloadsContainer>
          <a className={downloadsStyles.data} href={props.href}>
              <FontAwesomeIcon icon={faDownload} width={16} />
              <div>&nbsp;Download</div>
          </a>
        </DownloadsContainer>
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


