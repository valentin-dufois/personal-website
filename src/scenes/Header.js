import React, {Component} from 'react'
import {withRouter, Link, NavLink} from 'react-router-dom'
import { injectIntl } from 'react-intl'
import messages from '../library/messages'
import Cookies from 'js-cookie'

class Header extends Component {
  toggleLocale = () => {
    if(this.props.intl.locale === 'en')
      Cookies.set('locale', 'fr')
    else {
      Cookies.set('locale', 'en')
    }

    window.location.reload();
  }

  render() {
    return [
      <header key="header">
        <Link to="/" className="title">val</Link>
        <div id="language-switcher">
          <a onClick={this.toggleLocale} href="#">{ this.props.intl.formatMessage(messages.headlines) }</a>
        </div>
      </header>,
      <menu key="menu">
        <NavLink to="/" exact>{ this.props.intl.formatMessage(messages.menuWhoIAm) }</NavLink>
        <NavLink to="/what-i-do/">{ this.props.intl.formatMessage(messages.menuWhatIDo) }</NavLink>
      </menu>
    ]
  }
}

export default injectIntl(withRouter(Header));
