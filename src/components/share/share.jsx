import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

import styles from './share.module.scss';
import ShareLogo from '../../svgs/share.svg';
import facebookLogo from '../../images/colleges-and-universities/facebook.svg';
import twitterLogo from '../../images/colleges-and-universities/twitter.svg';
import linkedinLogo from '../../images/colleges-and-universities/linkedin.svg';
import redditLogo from '../../images/colleges-and-universities/reddit.svg';
import emailLogo from '../../images/colleges-and-universities/email.svg';
import pageColorMap from '../../utils/page-color';
import { legacyBlue } from '../../styles/variables.scss';

export default class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      fillColor: legacyBlue
    };

    this.url = encodeURIComponent(this.props.location ? this.props.location.href : this.props.siteUrl + this.props.pageUrl);
    this.pathName = this.props.location ? this.props.location.pathname : this.props.pageUrl;

    // The following will take the url pathname and make it into the readable text we've used in the past (eg. '/federal-employees' becomes 'Federal Employees')
    if (this.pathName) {
      if (this.pathName.charAt(0) === '/') {
        this.pathName = this.pathName.slice(1);
      }

      let pathNameSplit = this.pathName.split('-');
      for (let i = pathNameSplit.length; i--;) {
        pathNameSplit[i] = pathNameSplit[i].charAt(0).toUpperCase() + pathNameSplit[i].slice(1);
      }
      this.pathName = pathNameSplit.join(' ');
    }
    this.defaultTitle = `Data Lab - ${this.pathName} - U.S. Treasury`;
    this.title = encodeURIComponent(this.props.title || this.defaultTitle);
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setState({ fillColor: pageColorMap[window.location.pathname.split('/').join('')] })
    }
  }

  handleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  }

  handleShareClick = (e) => {
    let finalUrl;
    const { id } = e.target
    if (id === 'facebook-button' || id === 'facebook-icon' || id === 'facebook-label') {
      finalUrl = `https://www.facebook.com/sharer/sharer.php?u=${this.url}`;
      this.openShareWindow(finalUrl);
    } else if (id === 'twitter-button' || id === 'twitter-icon' || id === 'twitter-label') {
      const twitterText = encodeURIComponent(this.props.twitter || this.props.text || this.title);
      finalUrl = `https://twitter.com/intent/tweet?text=${twitterText}&url=${this.url}`;
      this.openShareWindow(finalUrl);
    } else if (id === 'linkedin-button' || id === 'linkedin-icon' || id === 'linkedin-label') {
      finalUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${this.url}`;
      this.openShareWindow(finalUrl);
    } else if (id === 'reddit-button' || id === 'reddit-icon' || id === 'reddit-label') {
      finalUrl = `http://www.reddit.com/submit?url=${this.url}`;
      this.openShareWindow(finalUrl);
    } else {
      finalUrl = `mailto:?subject=${this.title}&body=${this.props.text ? encodeURIComponent(this.props.text) + '%0D%0A%0D%0A' : ''}Check out this site ${this.url}`;
      window.location.href = finalUrl;
    }
  }

  openShareWindow = (url) => {
    window.open(url, '_blank', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
  }

  renderShareButton = () => {
    const StyledButton = withStyles(() => ({
      'root': {
        padding: 0,
        textTransform: 'none',
        '&:hover': {
          backgroundColor: 'transparent',
          '& span': {
            color: this.state.fillColor,
            textDecoration: 'underline'
          },
          '& svg': {
            fill: this.state.fillColor
          }
        },
        '&:focus': {
          backgroundColor: 'transparent',
          '& span': {
            color: this.state.fillColor,
            textDecoration: 'underline'
          },
          '& svg': {
            fill: this.state.fillColor
          }
        }
      }
    }))(Button)

    return (
      <StyledButton className={styles.vizShareIcon} aria-hidden="true" onClick={this.handleShow}>
        <ShareLogo />
        <span className={styles.shareText}>Share</span>
      </StyledButton>
    )
  }

  render() {
    const imageDimensions = { height: '1.25rem', width: '1.25rem' };
    const images = [
      {
        src: facebookLogo,
        style: imageDimensions
      },
      {
        src: twitterLogo,
        style: imageDimensions
      },
      {
        src: redditLogo,
        style: imageDimensions
      },
      {
        src: linkedinLogo,
        style: imageDimensions
      },
      {
        src: emailLogo,
        style: imageDimensions
      },
    ];

    const isShowing = this.state.show;

    return (
      <div className={styles.shareContainer}>
        <div className={`${styles.popup} ${styles.newShare}`}>
          {this.renderShareButton()}
          <span className={`${styles.popuptext} ${styles.right} ${styles.newpopup} ${isShowing ? styles.show : ``}`} id="sharePopup">
            <div className={styles.shareButtons}>
              <ul>
                <li>
                  <button id="facebook-button" title="Share on Facebook" className={styles.shareLink} onClick={this.handleShareClick}>
                    <img id="facebook-icon" src={images[0].src} role='presentation' style={images[0].style} className={styles.iconFacebook} />
                    <span id="facebook-label" className={styles.shareButtonText}>Facebook</span>
                  </button>
                </li>
                <li>
                  <button id="twitter-button" title="Share on Twitter" className={styles.shareLink} onClick={this.handleShareClick}>
                    <img id="twitter-icon" src={images[1].src} role='presentation' style={images[1].style} className={styles.iconTwitter} />
                    <span id="twitter-label" className={styles.shareButtonText}>Twitter</span>
                  </button>
                </li>
                <li>
                  <button id="reddit-button" title="Share on Reddit" className={styles.shareLink} onClick={this.handleShareClick}>
                    <img id="reddit-icon" src={images[2].src} role='presentation' style={images[2].style} className={styles.iconReddit} />
                    <span id="reddit-label" className={styles.shareButtonText}>Reddit</span>
                  </button>
                </li>
                <li>
                  <button id="linkedin-button" title="Share on LinkedIn" className={styles.shareLink} onClick={this.handleShareClick}>
                    <img id="linkedin-icon" src={images[3].src} role='presentation' style={images[3].style} className={styles.iconLinkedin} />
                    <span id="linkedin-label" className={styles.shareButtonText}>Linkedin</span>
                  </button>
                </li>
                <li>
                  <button id="email-button" title="Share via Email" className={styles.shareLink} onClick={this.handleShareClick}>
                    <img id="email-icon" src={images[4].src} role='presentation' style={images[4].style} className={styles.iconEnvelope} />
                    <span id="email-label" className={styles.shareButtonText}>Email</span>
                  </button>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    );
  }
}
