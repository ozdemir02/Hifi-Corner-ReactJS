/** @jsx jsx */
import { css, jsx } from '@emotion/core';
function Nav() {
  return (
      
<navbar className="navigation" css={css`
    width: 100%;
    height: 40px;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    font-size: 0.8em;`}>

    <ul className="navigation__unorderedlist" css={css`
    display: flex;
    text-decoration: none;`}>
      
        <li className="unorderedlist__link" css={css`margin-right: 2em; text-decoration: none;`}><a href="/index.html" class="link__anker" css={css`color: white; text-decoration: none;`}>HOME</a></li>
        <li className="unorderedlist__link" css={css`margin-right: 2em; text-decoration: none;`}><a href="/index.html" class="link__anker" css={css`color: white; text-decoration: none;`}>ABOUT US</a></li>
        <li className="unorderedlist__link" css={css`margin-right: 2em; text-decoration: none;`}><a href="/index.html" class="link__anker" css={css`color: white; text-decoration: none;`}>BRANDS</a></li>
        <li className="unorderedlist__link" css={css`margin-right: 2em; text-decoration: none;`}><a href="/index.html" class="link__anker" css={css`color: white; text-decoration: none;`}>BLOG</a></li>
        <li className="unorderedlist__link" css={css`margin-right: 2em; text-decoration: none;`}><a href="/index.html" class="link__anker" css={css`color: white; text-decoration: none;`}>EVENTS</a></li>
        <li className="unorderedlist__link" css={css`margin-right: 2em; text-decoration: none;`}><a href="/shopgallery" class="link__anker" css={css`color: white; text-decoration: none;`}>SHOP</a></li>
        <li className="unorderedlist__link" css={css`margin-right: 2em; text-decoration: none;`}><a href="home" class="link__anker" css={css`color: white; text-decoration: none;`}>CONTACT US</a></li>
    </ul>
</navbar>

  );
}
export default Nav;