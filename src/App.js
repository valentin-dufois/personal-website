import React, {Component} from 'react';
import './style/main.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from './scenes/Header.js'
import About from './scenes/About.js'
import Footer from './scenes/Footer.js'

import {IntlProvider } from 'react-intl'
import ScrollTop from './Components/ScrollTop'
import frenchMessages from './assets/locales/fr'
import englishMessages from './assets/locales/en'
import Work from './scenes/Work'


const locales = {
  'fr': frenchMessages,
  'en': englishMessages,
}

class App extends Component {
  constructor(props) {
    super(props);

    // Detect locale
    const savedLocal = Cookies.get('locale');
    let locale = 'en'

    if(savedLocal === 'undefined') {
      locale = window.navigator.language.split('-')[0].toLowerCase();
    } else {
      locale = savedLocal;
    }

    // Default to french if unknown language
    if(!(locale in locales)) {
      locale = 'fr'
    }

    Cookies.set('locale', locale);

    this.state = {
      locale: locale,
    }
  }
  render () {
    return (
      <Router>
        <ScrollTop />
        <IntlProvider
          messages={ locales[this.state.locale] }
          locale={ this.state.locale }>
          <Header key="header" />
          <Switch>
            <Route path="/what-i-do" component={Work} />
            {/*<Route path="/what-i-see" component={Pics} />*/}
            <Route component={About} />
          </Switch>
          <Footer />
        </IntlProvider>
      </Router>
    )
  }
}

export default App;
