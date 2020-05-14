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
    backgroundColor: 'rgba(255, 253, 253, 0.95)',
    borderRadius: '5px'
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
    console.log(open);
    this.setState({open: open});
  }

  handleResize = () => {
    this.setState({
      maxWidth: window.innerWidth * .70,
      maxHeight: window.innerHeight * .80
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
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={styles.title}>
              <span>{title}</span>
              <CloseIcon className={styles.close} tabIndex='0' onClick={this.handleClose} onKeyUp={e => this.keyUpHandler(e)} />
            </div>
            <div className={styles.content} style={{'maxWidth': this.state.maxWidth, 'maxHeight': this.state.maxHeight}}>
              {children}
            </div>
          </div>
        </Fade>
      </Modal>
    )
  }
}

export default withStyles(inlineStyles)(ModalReference);
