import React from 'react';
import ReactDOM from 'react-dom';

import { Javascripthome } from './assets/javascript/index.js';
// import { Router } from '@reach/router'


import './index.css';

import Header from './assets/components/header/header.js';
import Nav from './assets/components/header/nav.js';
import Main from './assets/components/home_main/main.js';
import Footer from './assets/components/home_footer/footer.js'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  
  <React.StrictMode>
    <Header />
    <Nav />
    <Main />
    <Footer />
    { Javascripthome }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
