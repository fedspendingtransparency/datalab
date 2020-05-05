import React from "react"
import Modal from "@material-ui/core/Modal/Modal"
import Backdrop from "@material-ui/core/Backdrop/Backdrop"
import Fade from "@material-ui/core/Fade/Fade"
import { withStyles } from "@material-ui/styles"
import CloseIcon from '@material-ui/icons/Close'
import styles from 'src/components/tooltip/tooltip.module.scss'

const inlineStyles = () => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px'
  },
  paper: {
    padding: '20px',
    boxShadow: '0 2px 30px 0 rgba(0, 0, 0, 0.16)',
    backgroundColor: 'rgba(255, 253, 253, 0.95)',
    maxWidth: window.innerWidth * .70,
    maxHeight: window.innerHeight * .80,
    borderRadius: '5px'
  },
});

class ModalReference extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      agency: null,
      width: window.innerWidth * .70,
      height: window.innerHeight * .80
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    this.setState({
      width: window.innerWidth * .70,
      height: window.innerHeight * .80
    })
  }

  handleOpen = (agencyName) => {
    this.setState({open: true, agency: agencyName});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  keyUpHandler = (e) => {
    if(e.keyCode === 13) {
      this.handleClose()
    }
  }

  render() {
    const { classes, children, title } = this.props;
    const { open } = this.state;

    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper} style={{'maxWidth': this.state.width, 'maxHeight': this.state.height}}>
            <div className={styles.title}>
              <span>{title}</span>
              <CloseIcon className={styles.close} tabIndex='0' onClick={this.handleClose} onKeyUp={e => this.keyUpHandler(e)} />
            </div>

            <div style={{'overflowY': 'scroll', 'maxHeight': this.state.height - 120, 'overflowX': 'hidden'}}>
              {children}
            </div>
          </div>
        </Fade>
      </Modal>
    )
  }
}

export default withStyles(inlineStyles)(ModalReference);
