import React                              from 'react';
import { Routes }                         from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PageTransition from './library/PageTransition';
import About  from './scenes/About.js';
import Footer from './scenes/Footer';
import Header from './scenes/Header';
import Work   from './scenes/Work';
import './style/main.scss';

const App = () => {
  return (
    <Router>
      <Header key="header"/>
      <PageTransition>
        {(location) => (
          <Routes location={location}>
            <Route index element={ <About/> }/>
            <Route path="/what-i-do/*" element={ <Work location={location}/> }/>
          </Routes>
        )}
      </PageTransition>
      <Footer/>
    </Router>
  );
};

export default App;
