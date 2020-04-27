import React, {Component} from 'react'
import {injectIntl} from 'react-intl'
import messages from '../../library/messages'
import {Link, Switch} from 'react-router-dom'

import neoTrafficImage1 from '../../assets/works/neo-traffic/neo.markets.png'
import neoTrafficImage2 from '../../assets/works/neo-traffic/neo.weather.fcl.png'
import neoTrafficImage3 from '../../assets/works/neo-traffic/neo.news.shd.png'

import tdImage1 from '../../assets/works/td-library/tap.tempo.thumb.png'
import tdImage2 from '../../assets/works/td-library/set.op.color.png'
import tdImage3 from '../../assets/works/td-library/holly.mess.png'

import prisme1 from '../../assets/works/prisme/dialog.3.JPG'
import prisme2 from '../../assets/works/prisme/embryo.1.jpg'
import prisme3 from '../../assets/works/prisme/servo.2.JPG'

class WorkHome extends Component {
  render() {
    return (
      <main className="work">
        <h1>{ "new std::thread([&] () {" }</h1>
        <h2>{ this.props.intl.formatMessage(messages.tdLibraryTitle) }</h2>
        <p>
          { this.props.intl.formatMessage(messages.tdLibraryExcerpt) }
          <Link className="open-arrow" to="td-library">&#10233;</Link>
        </p>
        <div className="thumbs-row">
          <img src={tdImage1} />
          <img src={tdImage3} />
          <img src={tdImage2} />
        </div>
        <h2>{ this.props.intl.formatMessage(messages.neoTitle) }</h2>
        <p>
          { this.props.intl.formatMessage(messages.neoExcerpt) }
          <Link className="open-arrow" to="neo-traffic">&#10233;</Link>
        </p>
        <div className="thumbs-row">
          <img src={neoTrafficImage1} className="bordered" />
          <img src={neoTrafficImage2} />
          <img src={neoTrafficImage3} />
        </div>
        <h2>{ this.props.intl.formatMessage(messages.prismeTitle) }</h2>
        <p>
          { this.props.intl.formatMessage(messages.prismeExcerpt) }
          <Link className="open-arrow" to="prisme">&#10233;</Link>
        </p>
        <div className="thumbs-row">
          <img src={prisme1} className="bordered" />
          <img src={prisme2} />
          <img src={prisme3} />
        </div>
        {/*<h2>{ this.props.intl.formatMessage(messages.locatorTitle) }</h2>*/}
        {/*<p>*/}
        {/*  { this.props.intl.formatMessage(messages.locatorExcerpt) }*/}
        {/*</p>*/}
      </main>
    )
  }
}

export default injectIntl(WorkHome);
