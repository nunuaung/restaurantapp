import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, NewsLetter, SpecialMenu, Top } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app_wrap">
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <NewsLetter/>
    <Footer />
    <Top />
  </div>
);

export default App;
