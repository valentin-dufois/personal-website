import React      from 'react';
import { Routes } from 'react-router';
import { Route }  from 'react-router-dom';
import AutoTrader from './Work/AutoTrader';
import DVin       from './Work/DVin';
import NeoConnect from './Work/NeoConnect';
import NeoTraffic from './Work/NeoTraffic';
import Prisme     from './Work/Prisme';
import Runner     from './Work/Runner';
import TDLibrary  from './Work/TDLibrary';
import WorkHome   from './Work/WorkHome';

const Work = ({ location }) => {
  return (
    <Routes location={location}>
      <Route index element={ <WorkHome/> }/>
      <Route path="neo-connect" element={ <NeoConnect/> }/>
      <Route path="dvin" element={ <DVin/> }/>
      <Route path="autotrader" element={ <AutoTrader/> }/>
      <Route path="runner" element={ <Runner/> }/>
      <Route path="prisme" element={ <Prisme/> }/>
      <Route path="td-library" element={ <TDLibrary/> }/>
      <Route path="neo-traffic" element={ <NeoTraffic/> }/>
    </Routes>
  );
};

export default Work;
