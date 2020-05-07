/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import arrowleft from '../../../assets/images/slider-prev.png'
import arrowright from '../../../assets/images/slider-next.png'
import facebook from '../../../assets/images/social-facebook.png'
import blog from '../../../assets/images/social-blog.png'
import twitter from '../../../assets/images/social-twitter.png'
import bannerspeaker from '../../../assets/images/banner-speaker.jpg'
import social1 from '../../../assets/images/social-1.jpg'
import social2 from '../../../assets/images/social-2.jpg'
import social3 from '../../../assets/images/social-3.jpg'

function Main() {
  return (
      
<main className="main" css={css``}>

    <div className="main__logoContainer" css={css`
        width: 110px;
        height: 120px;
        border: 2px white solid;
        margin: 0 auto;
        color: white;
        margin-top: 150px;`}>
        <h1 className="logoContainer__title" css={css`
            margin-top: 55px;
            letter-spacing: 5px;
            width: 60px;
            text-align: center;
            font-size: 25px;`}>HI FI</h1>
        <p className="logoContainer__subtitle" css={css`
            margin-top: 0px;
            position: absolute;`}>hificorner.co.uk</p>
    </div>

    <section className="main__banner" css={css`
        background: url(${bannerspeaker}) center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 220px;
        width: 100%;
        margin-top: 180px;
        margin-bottom: -20px;`}>
        <h1 className="banner__heading" css={css`
            color: white;
            font-size: 40px;
            width: 1000px;
            text-align: center;
            margin: 0 auto;
            padding-top: 75px;`}>OUR EDINBURGH SHOWROOM HAS NOW MOVED TO STUNNING NEW PREMISES ON JOPPA ROAD</h1>
    </section>

    <section className="main__slideshow" css={css`
        background-color: white;
        height: 650px;
        width: 100%;
        margin-top: 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 0;`}>
        <img className="arrows__arrowLeft" src={arrowleft} alt="Slide Left" css={css`
            height: 80px;
            left: 25px;
            color: #c0ab9f;
            margin-top: 290px;
            margin-left: 60px;
            cursor: pointer;`}></img>
        <img className="arrows__arrowRight" src={arrowright} alt="Slide Right" css={css`
            cursor: pointer;
            height: 80px;
            right: 25px;
            color: #c0ab9f;
            grid-column: 3;
            position: absolute;
            margin-top: 290px;
            margin-right: 60px;`}></img>
    </section>

    <section className="main__gallery" css={css`
        height: 400px;
        display: grid;
        width: 100%;
        margin-left: 0;
        grid-template-columns: 1fr 1fr 1fr;
        -webkit-transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;
        transition: all 500ms ease;`}>
        <figure className="gallery__boxLeft" css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            width: 100%;
            min-width: 410px;
            height: auto;
            min-height: 300px;
            vertical-align: middle;
            background: url(${social1});
            background-size: cover;`}>
                <img className="box__img" src={facebook} alt="Facebook" css={css`height: 150px;`}></img>
        </figure>
        <figure className="gallery__boxMid" css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            width: 100%;
            min-width: 410px;
            height: auto;
            min-height: 300px;
            vertical-align: middle;
            background: url(${social2});
            background-size: cover;`}>
                <img className="box__img" src={blog} alt="Blog" css={css`height: 150px;`}></img>
        </figure>
        <figure className="gallery__boxRight" css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            width: 100%;
            min-width: 410px;
            height: auto;
            min-height: 300px;
            vertical-align: middle;
            background: url(${social3});
            background-size: cover;`}>
                <img className="box__img" src={twitter} alt="Twitter" css={css`height: 150px;`}></img>
        </figure>
    </section>

    <section className="info" css={css`
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        color: white;
        background-color: #111111;`}>
        <article className="info__container" css={css`
            width: 284px;
            text-align: center;
            margin-left: 20px;
            margin-right: 20px;`}>
            <div className="container__title" css={css`
                text-transform: uppercase;
                border: 1px solid white;
                width: 120px;
                height: 30px;
                padding-top: 5px;
                margin: 0 auto;
                margin-top: 100px;
                color: #a39161;
                font-weight: bold;
                font-size: 20px;`}>History</div>
            <p className="container__subtitle" css={css`
                color: white;`}>ESTABLISHED IN THE LATE 1960S, OUR FAMILY OWNED BUSINESS
                IS BASED IN EDINBURGH AND FALKIRK, SERVICING CUSTOMERS
                ACROSS THE UK.</p>
        </article>
        <article className="info__container" css={css`
            width: 284px;
            text-align: center;
            margin-left: 20px;
            margin-right: 20px;`}>
            <div className="container__title" css={css`
                text-transform: uppercase;
                border: 1px solid white;
                width: 120px;
                height: 30px;
                padding-top: 5px;
                margin: 0 auto;
                margin-top: 100px;
                color: #a39161;
                font-weight: bold;
                font-size: 20px;`}>News</div>
            <p className="container__subtitle">CHECK OUT OUR LATEST NEWS STORIES FOR ALL THE UP TO DATE
                 HI-FI CORNER PRODUCTS AND LAUNCHES.</p>
        </article>
        <article className="info__container" css={css`
            width: 284px;
            text-align: center;
            margin-left: 20px;
            margin-right: 20px;`}>
            <div className="container__title" css={css`
                text-transform: uppercase;
                border: 1px solid white;
                width: 120px;
                height: 30px;
                padding-top: 5px;
                margin: 0 auto;
                margin-top: 100px;
                color: #a39161;
                font-weight: bold;
                font-size: 20px;`}>Shop</div>
            <p className="container__subtitle">HAVE A LOOK IN OUR ONLINE SHOP FOR GREAT PRODUCTS AND DEALS.</p>
        </article>
    </section>

</main>
);
}
export default Main;
