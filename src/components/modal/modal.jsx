import React from "react"
import Modal from "@material-ui/core/Modal/Modal"
import Backdrop from "@material-ui/core/Backdrop/Backdrop"
import Fade from "@material-ui/core/Fade/Fade"
import { withStyles } from "@material-ui/styles"
import CloseIcon from '@material-ui/icons/Close'
import styles from './modal.module.scss'

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
    backgroundColor: '#FFFDFD',
    borderRadius: '5px',
    outline: 'white'
  },
});

class ModalReference extends React.Component {
  constructor(props) {
    super(props);

    const windowWidth = () => {
      if (typeof window !== 'undefined') {
        return window.innerWidth * .70;
      }
    };

    const windowHeight = () => {
      if (typeof window !== 'undefined') {
        return window.innerHeight * .80 - 120;
      }
    };

    this.state = {
      open: this.props.open,
      maxWidth: this.props.maxWidth ? windowWidth() : null,
      maxHeight: this.props.maxHeight ? windowHeight() : null
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentWillReceiveProps({open}) {
    this.setState({open: open});
  }

  handleResize = () => {
    this.setState({
      maxWidth: this.props.maxWidth ? window.innerWidth * .70 : null,
      maxHeight: this.props.maxHeight ? window.innerHeight * .80 : null
    })
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.props.close();
    this.setState({open: false});
  };

  keyUpHandler = (e) => {
    if(e.keyCode === 13) {
      this.handleClose();
    }
  }

  render() {
    const { classes, children, title, titleStyle, paperStyle, contentStyle } = this.props;
    const { open, maxWidth, maxHeight } = this.state;

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
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={paperStyle}>
            <div className={styles.modalTitle}>
              <span style={titleStyle}>{title}</span>
              <CloseIcon className={styles.close} tabIndex='0' onClick={this.handleClose} onKeyUp={e => this.keyUpHandler(e)} />
            </div>
            <div className={styles.content} style={{ maxWidth, maxHeight, ...contentStyle }}>
              {children}
            </div>
          </div>
        </Fade>
      </Modal>
    )
  }
}

export default withStyles(inlineStyles)(ModalReference);
