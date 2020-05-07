/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import map from '../../../assets/images/top-map.png'
import call from '../../../assets/images/top-call.png'
import mail from '../../../assets/images/top-mail.png'

const Header = () => (
	<header className="header" css={css`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	height: 60px;
	background: rgba(0, 0, 0, 0.7);
	border-bottom: 1px solid #413a27;`}>

		<div className="header__box" css={css`
       	display: flex;
       	align-items: center;
       	flex-direction: row-reverse;`}>

      	<button className="box__button" css={css`
       	cursor: pointer;
       	margin-right: 15px;
       	background-color: #1798f1;
       	outline: none;
       	border: solid black 1px;
       	border-radius: 3px;
       	color: white;
       	margin-top: 9px;`}>&#9993; | Subscribe</button>

	  	<img className="box__contact" src={map} alt="map" css={css`
        cursor: pointer;
        height: 20px;
        margin-right: 15px;
        margin-top: 10px;`}/>

	  	<img className="box__contact" src={call} alt="call" css={css`
        cursor: pointer;
        height: 20px;
        margin-right: 15px;
        margin-top: 10px;`}/>

	  	<img className="box__contact" src={mail} alt="mail" css={css`
        cursor: pointer;
        height: 20px;
        margin-right: 15px;
        margin-top: 10px;`}/>

		</div>
	</header>

  );

export default Header;