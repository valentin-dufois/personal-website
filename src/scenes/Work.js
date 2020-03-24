import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import WorkHome from './Work/WorkHome'
import NeoTraffic from './Work/Neo-Traffic'
import TDLibrary from './Work/TDLibrary'

class Work extends Component {
  render() {
    return (
      <Switch>
        <Route path="/what-i-do/td-library" component={TDLibrary} />
        <Route path="/what-i-do/neo-traffic" component={NeoTraffic} />
        <Route component={WorkHome} />
      </Switch>
    )
  }
}

export default Work;
