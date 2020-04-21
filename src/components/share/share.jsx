import React, { Component } from 'react';
import styles from './share.module.scss';
import shareLogo from '../../images/colleges-and-universities/share.svg';
import facebookLogo from '../../images/colleges-and-universities/facebook.svg';
import twitterLogo from '../../images/colleges-and-universities/twitter.svg';
import linkedinLogo from '../../images/colleges-and-universities/linkedin.svg';
import redditLogo from '../../images/colleges-and-universities/reddit.svg';
import emailLogo from '../../images/colleges-and-universities/email.svg';

export default class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleShareClickFacebook = this.handleShareClickFacebook.bind(this);
    this.handleShareClickTwitter = this.handleShareClickTwitter.bind(this);
    this.handleShareClickLinkedin = this.handleShareClickLinkedin.bind(this);
    this.handleShareClickReddit = this.handleShareClickReddit.bind(this);
    this.handleShareClickEmail = this.handleShareClickEmail.bind(this);
    this.openShareWindow = this.openShareWindow.bind(this);
    this.url = this.props.location ? this.props.location.href : this.props.siteUrl + this.props.pageUrl;
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

  handleShow() {
    this.setState(prevState => ({ show: !prevState.show }));
  }

  handleShareClickFacebook(e) {
    const finalUrl = `https://www.facebook.com/sharer/sharer.php?u=${this.url}`;
    this.openShareWindow(finalUrl);
  }

  handleShareClickTwitter(e) {
    const twitterText = encodeURIComponent(this.props.twitter || this.props.text || this.title);
    let finalUrl = `https://twitter.com/intent/tweet?text=${twitterText}&url=${this.url}`;
    this.openShareWindow(finalUrl);
  }

  handleShareClickLinkedin(e) {
    const finalUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${this.url}`;
    this.openShareWindow(finalUrl);
  }

  handleShareClickReddit(e) {
    const finalUrl = `http://www.reddit.com/submit?url=${this.url}`;
    this.openShareWindow(finalUrl);
  }

  handleShareClickEmail(e) {
    const finalUrl = `mailto:?subject=${this.title}&body=${this.props.text ? this.props.text + '%0D%0A%0D%0A' : ''}Check out this site ${this.url}`;
    window.location.href = finalUrl;
  }

  openShareWindow(url) {
    window.open(url, '_blank', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
  }

  render() {

    // there is an article i read regarding using svgs
    // we shouldn't be importing them as images! we should find a better way...
    const imageDimensions = { height: '1.25rem', width: '1.25rem' };
    const images = [
      {
        src: shareLogo
      },
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

    // TODO, use data-id's to dynamically see if "facebook" or "twitter".. etc..
    return (
      <div className={styles.shareContainer}>
        <div className={`${styles.popup} ${styles.newShare}`}>
          <button className={styles.vizShareIcon} aria-hidden="true" onClick={this.handleShow}>
            <img src={images[0].src} role='presentation' />
            <span className={styles.shareText}>Share</span>
          </button>
          <span className={`${styles.popuptext} ${styles.right} ${styles.newpopup} ${isShowing ? styles.show : ``}`} id="sharePopup">
            <div className={styles.shareButtons}>
              <ul>
                <li>
                  <button data-id="1" title="Share on Facebook" className={styles.shareLink} onClick={this.handleShareClickFacebook}>
                    <img src={images[1].src} role='presentation' style={images[1].style} className={styles.iconFacebook} />
                    <span className={styles.shareButtonText}>Facebook</span>
                  </button>
                </li>
                <li>
                  <button data-id='2' title="Share on Twitter" className={styles.shareLink} onClick={this.handleShareClickTwitter}>
                    <img src={images[2].src} role='presentation' style={images[2].style} className={styles.iconTwitter} />
                    <span className={styles.shareButtonText}>Twitter</span>
                  </button>
                </li>
                <li>
                  <button data-id='3' title="Share on Reddit" className={styles.shareLink} onClick={this.handleShareClickReddit}>
                    <img src={images[3].src} role='presentation' style={images[3].style} className={styles.iconReddit} />
                    <span className={styles.shareButtonText}>Reddit</span>
                  </button>
                </li>
                <li>
                  <button data-id='4' title="Share on LinkedIn" className={styles.shareLink} onClick={this.handleShareClickLinkedin}>
                    <img src={images[4].src} role='presentation' style={images[4].style} className={styles.iconLinkedin} />
                    <span className={styles.shareButtonText}>Linkedin</span>
                  </button>
                </li>
                <li>
                  <button data-id='5' title="Share via Email" className={styles.shareLink} onClick={this.handleShareClickEmail}>
                    <img src={images[5].src} role='presentation' style={images[5].style} className={styles.iconEnvelope} />
                    <span className={styles.shareButtonText}>Email</span>
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
