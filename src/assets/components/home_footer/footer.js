/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import pay_logo from '../../../assets/images/pay_logos.png'
import facebook from '../../../assets/images/footer-facebook.png'
import youtube from '../../../assets/images/footer-youtube.png'
import twitter from '../../../assets/images/footer-twitter.png'
import linkedin from '../../../assets/images/footer-linkedin.png'


function Footer() {
  return (

<footer className="homeFooter" css={css`
    margin-top: -20px;
    width: 100%;
    height: 90px;
    color: white;
    background-color: #a39161;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    position: relative;`}>
    <div className="homeFooter__container" css={css` display: flex; align-items: center;`}>
      <p className="container__registeredTitle" css={css`
          display: flex;
          flex-direction: column;
          font-size: 8px;
          color: black;
          font-weight: bold;
          margin-left: 30px;
          width: 190px;`}>Hi Fi Corner (Edinburgh) Ltd is registered in Scotland
          <span className="registeredTitle__Number" css={css`
              color: black;`}>No: SC049298</span>
          <span className="registeredTitle__Subtitle" css={css`
              color: black;`}>Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</span>
      </p>
      <h6 className="container__links" css={css`
          font-size: 11px;
          color: white;
          margin-top: 0;
          margin-left: 50px;
          font-weight: lighter;`}>
          <a className="links__refundAnker" href="/refund" css={css`color: white; margin-right: 5px;`}>
            Returns and Refunds
          </a> | 
          <a className="links__privacyAnker" href="/privacy" css={css`color: white; margin-left: 5px;`}>
            Privacy Policy.
          </a>
      </h6>
    </div>
    <div className="homeFooter__socialsContainer" css={css`display: flex; align-items: center;`}>
        <img className="socialsContainer__payBrands" src={pay_logo} alt="Payment Logo" css={css`height: 60px;`}/>
        <figure className="socialsContainer__socials"css={css`width: 100px;`}>
            <img className="" src={facebook} alt="Facebook"/>
            <img className="" src={youtube} alt="Youtube"/>
            <img className="" src={twitter} alt="Twitter"/>
            <img className="" src={linkedin} alt="Linkedin"/>
        </figure>
    </div>
</footer>

  );
}
export default Footer;

