import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import AccordionList from "../../../components/accordion-list/accordion-list"
import ControlBar from "../../../components/control-bar/control-bar"
import Share from "../../../components/share/share"
import Downloads from "../../../components/section-elements/downloads/downloads"
import waffle from '../../../../static/images/waffle-placeholder.png'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function Funding(props) {

  const _data = useStaticQuery(graphql`
    query {
      allFundingAgencyAppropriationsCsv {
        nodes {
          Agency
        }
      }
    }
  `);

  const agencies = _data.allFundingAgencyAppropriationsCsv.nodes;
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const ModalRef = React.createRef();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onKeyUp = (e) => {
    if(e.keyCode === 13) {
      handleOpen();
    }
  }

  return (<>
      <h2 className='rd-viztitle'>{props.section.viztitle}</h2>
      <AccordionList title='Instructions'>
        <p>xxxxx</p>
        <ul>
          <li>xxxx</li>
          <li>xxxx</li>
          <li>xxxx</li>
        </ul>
      </AccordionList>

      <ControlBar>
        <Share
          siteUrl={props.location.origin}
          pageUrl={props.location.pathname + '#' + props.sectionId}
          title='xxxxx'
          text={`xxxxx`}
          hoverColor='#1302d9'
        />
      </ControlBar>

      <p>Legend</p>

      <Grid container spacing={3}>
        {agencies.map((agency, key) => {
          return (
            <Grid item xs={6} md={3} lg={2} key={`agency-${key}`} tabIndex='0' onClick={handleOpen} onKeyUp={e => onKeyUp(e)}>
              <div style={{'height': '2.5rem'}}>{agency.Agency}</div>
              <img src={waffle} style={{'width': '100%'}} />
            </Grid>
            )
        })}
      </Grid>

      <p>Legend 2</p>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>

      <Downloads
        href={'/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318.csv'}
        date={'December 2019'}
      />

  </>);
}


